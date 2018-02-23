import { Observable } from 'tns-core-modules/data/observable';
import { ImageCache } from 'nativescript-image-cache';

export class HelloWorldModel extends Observable {
  public message: string;
  private imageCache: ImageCache;

  constructor() {
    super();

    this.imageCache = new ImageCache();
    this.message = this.imageCache.message;
  }
}
