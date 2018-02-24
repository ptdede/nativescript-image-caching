import * as imageSrc from 'tns-core-modules/image-source';
import { View, layout } from 'tns-core-modules/ui/core/view';
import { ImageCacheBase } from './image-cache.common';
import * as common from './image-cache.common'
global.moduleMerge(common, exports)

export class ImageCache extends ImageCacheBase {

    nativeView: UIImageView;

    constructor() {
        super();
        this.nativeView = UIImageView.new();
        this.nativeView.contentMode = UIViewContentMode.ScaleAspectFill;
        this.nativeView.clipsToBounds = true;
        /*
        TODO Loading Indicator

        (this.nativeView as any).sd_setShowActivityIndicatorView(true);
        (this.nativeView as any).sd_setIndicatorStyle(2);


        WhiteLarge = 0,

        White = 1,

        Gray = 2
        */
    }

    isLoading: boolean;

    public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
        const nativeView = this.nativeView;
        if (nativeView) {
            const width = layout.getMeasureSpecSize(widthMeasureSpec);
            const height = layout.getMeasureSpecSize(heightMeasureSpec);
            this.setMeasuredDimension(width, height);
        }
    }

    public initNativeView() {

        // if (this.src && this.src.startsWith('http')) {
        //     this.isLoading = true;
        //     (<any>this.nativeView).sd_setImageWithURLPlaceholderImageCompleted(
        //         this.src,
        //         this.placeholder
        //             ? imageSrc.fromFileOrResource(this.placeholder).ios
        //             : null,
        //         () => {
        //             this.isLoading = false;
        //         }
        //     );
        // } else if (this.src) {
        //     const source = imageSrc.fromFileOrResource(this.src);
        //     console.log(source);
        //     this.nativeView.image = source ? source.ios : null;
        // }
    }

    [common.srcProperty.getDefault](): any {
        return undefined;
    }

    [common.srcProperty.setNative](src: string) {
        if (!src) return src;

        if (this.loading) {
            (<any>this.nativeView).sd_setShowActivityIndicatorView(true)
        }

        if (src.startsWith('http')) {
            this.isLoading = true;
            // (<any>this.nativeView).sd_setImageWithURLPlaceholderImageCompleted(
            //     src,
            //     this.placeholder
            //         ? imageSrc.fromFileOrResource(this.placeholder).ios
            //         : null,
            //     (p1: UIImage, p2: NSError, p3: SDImageCacheType, p4: NSURL) => {
            //         this.isLoading = false;
            //     }
            // );

            (<any>this.nativeView).sd_setImageWithURLPlaceholderImage(src, this.placeholder ?
                                                      imageSrc.fromFileOrResource(this.placeholder).ios : null)
        } else {
            const source = imageSrc.fromFileOrResource(src);
            this.nativeView.image = source ? source.ios : null;
        }

        return src;
    }
}