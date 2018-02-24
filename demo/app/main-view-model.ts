import { Observable } from 'tns-core-modules/data/observable';
import { ImageCache } from 'nativescript-image-cache';
import { getRandomInt } from './utils/functions/general'

export class HelloWorldModel extends Observable {
  public message: string;
  private imageCache: ImageCache;

  constructor() {
    super();

    this.imageCache = new ImageCache();
  }

    getRandomInt() {
      return getRandomInt(1, 10000)
    }
}
