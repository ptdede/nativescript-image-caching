import * as imageSrc from 'tns-core-modules/image-source';
import * as common from './image-caching.common';
import {ImageCacheBase} from "./image-caching.common";
import Glide = com.bumptech.glide.Glide

global.moduleMerge(common, exports)

export class ImageCache extends ImageCacheBase {

    nativeView: org.nativescript.widgets.ImageView;

    constructor() {
        super()
    }

    public createNativeView() {
        // this.glide = (com as any).bumptech.glide.Glide;
        return new android.widget.ImageView(this._context);
    }

    public initNativeView() {

        let glide

        if (this.src) {

            glide = Glide.with(this._context)
                     .load(this.src)
                     .centerCrop()

        }

        if (this.placeholder) {

            glide.placeholder(new android.graphics.drawable.BitmapDrawable(
                    this._context.getResources(),
                    imageSrc.fromFileOrResource(this.placeholder).android
                )
            )
        }

        glide.into(this.nativeView)
    }
}