// @flow

/**
 * @class Ad
 * @param {string} id - Ad ID.
 * @param {PKAdOptions} options - Ad data options.
 */
class Ad {
  _id: string;
  _system: ?string;
  _url: ?string;
  _contentType: ?string;
  _title: ?string;
  _position: ?number;
  _duration: ?number;
  _clickThroughUrl: ?string;
  _posterUrl: ?string;
  _skipOffset: ?number;
  _linear: boolean;
  _width: number;
  _height: number;
  _bitrate: number;
  _bumper: boolean;
  _inStream: boolean;
  _vpaid: boolean;
  _streamId: string;
  _wrapperAdIds: Array<string>;
  _wrapperCreativeIds: Array<string>;
  _wrapperAdSystems: Array<string>;
  constructor(id: string, options: PKAdOptions) {
    this._id = id;
    this._system = options.system;
    this._url = options.url;
    this._contentType = options.contentType;
    this._title = options.title;
    this._position = options.position;
    this._duration = options.duration;
    this._clickThroughUrl = options.clickThroughUrl;
    this._posterUrl = options.posterUrl;
    this._skipOffset = options.skipOffset;
    this._linear = options.linear;
    this._width = options.width || 0;
    this._height = options.height || 0;
    this._bitrate = options.bitrate || 0;
    this._bumper = options.bumper;
    this._inStream = options.inStream || false;
    this._vpaid = options.vpaid || false;
    this._streamId = options.streamId || '';
    this._wrapperAdIds = options.wrapperAdIds;
    this._wrapperCreativeIds = options.wrapperCreativeIds;
    this._wrapperAdSystems = options.wrapperAdSystems;
  }

  /**
   * @instance
   * @memberof Ad
   * @return {string} - Ad ID.
   */
  get id(): string {
    return this._id;
  }

  /**
   * @instance
   * @memberof Ad
   * @return {?string} - Ad system.
   */
  get system(): ?string {
    return this._system;
  }

  /**
   * @instance
   * @memberof Ad
   * @return {string} - Ad content type.
   */
  get contentType(): ?string {
    return this._contentType;
  }

  /**
   * @instance
   * @memberof Ad
   * @return {string} - Ad URL.
   */
  get url(): ?string {
    return this._url;
  }

  /**
   * @instance
   * @memberof Ad
   * @return {string} - Ad title.
   */
  get title(): ?string {
    return this._title;
  }

  /**
   * @instance
   * @memberof Ad
   * @return {string} - Ad position inside the ad break.
   */
  get position(): ?number {
    return this._position;
  }

  /**
   * @instance
   * @memberof Ad
   * @return {string} - Ad duration.
   */
  get duration(): ?number {
    return this._duration;
  }

  /**
   * @instance
   * @memberof Ad
   * @return {string} - Ad click through URL.
   */
  get clickThroughUrl(): ?string {
    return this._clickThroughUrl;
  }

  /**
   * @instance
   * @memberof Ad
   * @return {string} - Ad poster URL.
   */
  get posterUrl(): ?string {
    return this._posterUrl;
  }

  /**
   * @instance
   * @memberof Ad
   * @return {string} - Ad skip offset.
   */
  get skipOffset(): ?number {
    return this._skipOffset;
  }

  /**
   * @instance
   * @memberof Ad
   * @return {boolean} - Whether the ad is linear.
   */
  get linear(): boolean {
    return this._linear;
  }

  /**
   * @instance
   * @memberof Ad
   * @return {string} - Ad width.
   */
  get width(): number {
    return this._width;
  }

  /**
   * @instance
   * @memberof Ad
   * @return {string} - Ad height.
   */
  get height(): number {
    return this._height;
  }

  /**
   * @instance
   * @memberof Ad
   * @return {string} - Ad bitrate.
   */
  get bitrate(): number {
    return this._bitrate;
  }

  /**
   * @instance
   * @memberof Ad
   * @return {boolean} - Whether the ad is bumper.
   */
  get bumper(): boolean {
    return this._bumper;
  }

  /**
   * @instance
   * @memberof Ad
   * @return {boolean} - Whether the ad is imadai.
   */
  get inStream(): boolean {
    return this._inStream;
  }

  /**
   * @instance
   * @memberof Ad
   * @return {string} - Whether the ad is skippable or not.
   */
  get skippable(): boolean {
    return !!(this.skipOffset && this.skipOffset > 0);
  }

  /**
   * @instance
   * @memberof Ad
   * @return {boolean} - Whether the ad is vpaid or not.
   */
  get vpaid(): boolean {
    return this._vpaid;
  }

  /**
   * @instance
   * @memberof Ad
   * @return {string} - The ad streamId.
   */
  get streamId(): string {
    return this._streamId;
  }

  /**
   * @instance
   * @memberof Ad
   * @return {string} - The ad wrapperAdIds.
   */
  get wrapperAdIds(): Array<string> {
    return this._wrapperAdIds;
  }

  /**
   * @instance
   * @memberof Ad
   * @return {string} - The ad wrapperCreativeIds.
   */
  get wrapperCreativeIds(): Array<string> {
    return this._wrapperCreativeIds;
  }

  /**
   * @instance
   * @memberof Ad
   * @return {string} - The ad wrapperAdSystems.
   */
  get wrapperAdSystems(): Array<string> {
    return this._wrapperAdSystems;
  }

  toJSON(): Object {
    return {
      id: this.id,
      system: this.system,
      url: this.url,
      contentType: this.contentType,
      title: this.title,
      position: this.position,
      duration: this.duration,
      clickThroughUrl: this.clickThroughUrl,
      posterUrl: this.posterUrl,
      skipOffset: this.skipOffset,
      linear: this.linear,
      skippable: this.skippable,
      width: this.width,
      height: this.height,
      bitrate: this.bitrate,
      bumper: this.bumper,
      inStream: this.inStream,
      vpaid: this.vpaid
    };
  }
}

export {Ad};
