// @flow
import {PlaylistItem} from './playlist-item';
import {Utils} from '@playkit-js/playkit-js';

class Playlist {
  _id: string;
  _metadata: ProviderPlaylistMetadataObject;
  _poster: ?string;
  _items: Array<PlaylistItem>;
  _activeItemIndex: number;

  constructor() {
    this._id = '';
    this._metadata = {name: '', description: ''};
    this._poster = '';
    this._items = [];
    this._activeItemIndex = -1;
  }

  configure(config: KPPlaylistObject, sourcesOptions: ?PKMediaSourceOptionsObject) {
    this._id = config.id ? config.id : this._id;
    this._poster = config.poster ? config.poster : this._poster;
    this._metadata = config.metadata ? config.metadata : this._metadata;
    if (config.items) {
      this._items = [];
      config.items.forEach((item, index) => {
        if (item.sources) {
          const configSourcesOptions = Utils.Object.mergeDeep({}, sourcesOptions);
          const itemSourcesOptions = item.sources.options || {};
          item.sources.options = Utils.Object.mergeDeep(configSourcesOptions, itemSourcesOptions);
        }
        this._items.push(new PlaylistItem(item.sources, item.config, index));
      });
    }
  }

  updateItemSources(index: number, sourcesObject: PKSourcesConfigObject) {
    this._items[index].updateSources(sourcesObject);
  }

  updateItemPlugins(index: number, pluginsObject: KPPluginsConfigObject) {
    this._items[index].updatePlugins(pluginsObject);
  }

  get id(): string {
    return this._id;
  }

  get items(): Array<PlaylistItem> {
    return this._items;
  }

  get metadata(): ProviderPlaylistMetadataObject {
    return this._metadata;
  }

  get poster(): ?string {
    return this._poster;
  }

  get current(): ?PlaylistItem {
    return this._items[this._activeItemIndex] || null;
  }

  getNext(loop: boolean): ?PlaylistItem {
    const nextIndex = loop ? (this._activeItemIndex + 1) % this._items.length : this._activeItemIndex + 1;
    return this._items[nextIndex] || null;
  }

  get prev(): ?PlaylistItem {
    return this._items[this._activeItemIndex - 1] || null;
  }

  set activeItemIndex(index: number): void {
    this._activeItemIndex = index;
  }
}

export {Playlist};
