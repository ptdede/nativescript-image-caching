import {View} from 'tns-core-modules/ui/core/view'
import {Property} from "tns-core-modules/ui/core/properties";

export const srcProperty = new Property<ImageCacheBase, string>({
    name: 'src'
})

export const placeholderProperty = new Property<ImageCacheBase, string>({
    name: 'placeholder'
})

export const loadingProperty = new Property<ImageCacheBase, boolean>({
    name: 'loading'
})

export class ImageCacheBase extends View {

    public src: string
    public placeholder: string
    public loading: boolean

    constructor() {
        super();
    }
}

srcProperty.register(ImageCacheBase)
placeholderProperty.register(ImageCacheBase)
loadingProperty.register(ImageCacheBase)