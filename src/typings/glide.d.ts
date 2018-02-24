/// <reference path="./_helpers.d.ts" />
/// <reference path="./com.bumptech.glide.GenericRequestBuilder.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export class BitmapOptions {
				/**
				 * Constructs a new instance of the com.bumptech.glide.BitmapOptions interface with the provided implementation.
				 */
				public constructor(implementation: {
					fitCenter(): com.bumptech.glide.GenericRequestBuilder;
					centerCrop(): com.bumptech.glide.GenericRequestBuilder;
				});
				public fitCenter(): com.bumptech.glide.GenericRequestBuilder;
				public centerCrop(): com.bumptech.glide.GenericRequestBuilder;
			}
		}
	}
}

import androidviewanimationAnimation = android.view.animation.Animation;
import androidgraphicsdrawableDrawable = android.graphics.drawable.Drawable;
import javalangObject = java.lang.Object;
import androidwidgetImageView = android.widget.ImageView;
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.view.animation.Animation.d.ts" />
/// <reference path="./android.widget.ImageView.d.ts" />
/// <reference path="./com.bumptech.glide.GenericRequestBuilder.d.ts" />
/// <reference path="./com.bumptech.glide.Priority.d.ts" />
/// <reference path="./com.bumptech.glide.load.DecodeFormat.d.ts" />
/// <reference path="./com.bumptech.glide.load.Encoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.Key.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceDecoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceEncoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.Transformation.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.DiskCacheStrategy.d.ts" />
/// <reference path="./com.bumptech.glide.load.resource.bitmap.BitmapTransformation.d.ts" />
/// <reference path="./com.bumptech.glide.load.resource.transcode.ResourceTranscoder.d.ts" />
/// <reference path="./com.bumptech.glide.request.FutureTarget.d.ts" />
/// <reference path="./com.bumptech.glide.request.RequestListener.d.ts" />
/// <reference path="./com.bumptech.glide.request.target.Target.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export class BitmapRequestBuilder extends com.bumptech.glide.GenericRequestBuilder implements com.bumptech.glide.BitmapOptions {
				public thumbnail(param0: number): com.bumptech.glide.BitmapRequestBuilder;
				public sourceEncoder(param0: com.bumptech.glide.load.Encoder): com.bumptech.glide.BitmapRequestBuilder;
				public centerCrop(): com.bumptech.glide.BitmapRequestBuilder;
				public decoder(param0: com.bumptech.glide.load.ResourceDecoder): com.bumptech.glide.GenericRequestBuilder;
				public dontAnimate(): com.bumptech.glide.BitmapRequestBuilder;
				public encoder(param0: com.bumptech.glide.load.ResourceEncoder): com.bumptech.glide.BitmapRequestBuilder;
				public approximate(): com.bumptech.glide.BitmapRequestBuilder;
				public transcoder(param0: com.bumptech.glide.load.resource.transcode.ResourceTranscoder): com.bumptech.glide.BitmapRequestBuilder;
				public error(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public animate(param0: androidviewanimationAnimation): com.bumptech.glide.GenericRequestBuilder;
				public animate(param0: number): com.bumptech.glide.BitmapRequestBuilder;
				public error(param0: androidgraphicsdrawableDrawable): com.bumptech.glide.GenericRequestBuilder;
				public sourceEncoder(param0: com.bumptech.glide.load.Encoder): com.bumptech.glide.GenericRequestBuilder;
				public transform(param0: native.Array<com.bumptech.glide.load.Transformation>): com.bumptech.glide.BitmapRequestBuilder;
				public clone(): com.bumptech.glide.BitmapRequestBuilder;
				public animate(param0: com.bumptech.glide.request.animation.ViewPropertyAnimation.Animator): com.bumptech.glide.GenericRequestBuilder;
				public format(param0: com.bumptech.glide.load.DecodeFormat): com.bumptech.glide.BitmapRequestBuilder;
				public animate(param0: androidviewanimationAnimation): com.bumptech.glide.BitmapRequestBuilder;
				public listener(param0: com.bumptech.glide.request.RequestListener): com.bumptech.glide.GenericRequestBuilder;
				public override(param0: number, param1: number): com.bumptech.glide.BitmapRequestBuilder;
				public signature(param0: com.bumptech.glide.load.Key): com.bumptech.glide.BitmapRequestBuilder;
				public priority(param0: com.bumptech.glide.Priority): com.bumptech.glide.BitmapRequestBuilder;
				public fitCenter(): com.bumptech.glide.BitmapRequestBuilder;
				public centerCrop(): com.bumptech.glide.GenericRequestBuilder;
				public animate(param0: com.bumptech.glide.request.animation.ViewPropertyAnimation.Animator): com.bumptech.glide.BitmapRequestBuilder;
				public dontAnimate(): com.bumptech.glide.GenericRequestBuilder;
				public into(param0: number, param1: number): com.bumptech.glide.request.FutureTarget;
				public cacheDecoder(param0: com.bumptech.glide.load.ResourceDecoder): com.bumptech.glide.GenericRequestBuilder;
				public fitCenter(): com.bumptech.glide.GenericRequestBuilder;
				public sizeMultiplier(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public priority(param0: com.bumptech.glide.Priority): com.bumptech.glide.GenericRequestBuilder;
				public animate(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public placeholder(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public listener(param0: com.bumptech.glide.request.RequestListener): com.bumptech.glide.BitmapRequestBuilder;
				public error(param0: androidgraphicsdrawableDrawable): com.bumptech.glide.BitmapRequestBuilder;
				public thumbnail(param0: com.bumptech.glide.GenericRequestBuilder): com.bumptech.glide.BitmapRequestBuilder;
				public fallback(param0: number): com.bumptech.glide.BitmapRequestBuilder;
				public thumbnail(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public diskCacheStrategy(param0: com.bumptech.glide.load.engine.DiskCacheStrategy): com.bumptech.glide.GenericRequestBuilder;
				public fallback(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public thumbnail(param0: com.bumptech.glide.BitmapRequestBuilder): com.bumptech.glide.BitmapRequestBuilder;
				public sizeMultiplier(param0: number): com.bumptech.glide.BitmapRequestBuilder;
				public cacheDecoder(param0: com.bumptech.glide.load.ResourceDecoder): com.bumptech.glide.BitmapRequestBuilder;
				public transcoder(param0: com.bumptech.glide.load.resource.transcode.ResourceTranscoder): com.bumptech.glide.GenericRequestBuilder;
				public load(param0: javalangObject): com.bumptech.glide.BitmapRequestBuilder;
				public encoder(param0: com.bumptech.glide.load.ResourceEncoder): com.bumptech.glide.GenericRequestBuilder;
				public override(param0: number, param1: number): com.bumptech.glide.GenericRequestBuilder;
				public into(param0: androidwidgetImageView): com.bumptech.glide.request.target.Target;
				public videoDecoder(param0: com.bumptech.glide.load.ResourceDecoder): com.bumptech.glide.BitmapRequestBuilder;
				public dontTransform(): com.bumptech.glide.BitmapRequestBuilder;
				public transform(param0: native.Array<com.bumptech.glide.load.Transformation>): com.bumptech.glide.GenericRequestBuilder;
				public placeholder(param0: number): com.bumptech.glide.BitmapRequestBuilder;
				public placeholder(param0: androidgraphicsdrawableDrawable): com.bumptech.glide.BitmapRequestBuilder;
				public into(param0: com.bumptech.glide.request.target.Target): com.bumptech.glide.request.target.Target;
				public thumbnail(param0: com.bumptech.glide.GenericRequestBuilder): com.bumptech.glide.GenericRequestBuilder;
				public placeholder(param0: androidgraphicsdrawableDrawable): com.bumptech.glide.GenericRequestBuilder;
				public dontTransform(): com.bumptech.glide.GenericRequestBuilder;
				public error(param0: number): com.bumptech.glide.BitmapRequestBuilder;
				public asIs(): com.bumptech.glide.BitmapRequestBuilder;
				public skipMemoryCache(param0: boolean): com.bumptech.glide.GenericRequestBuilder;
				public atMost(): com.bumptech.glide.BitmapRequestBuilder;
				public load(param0: javalangObject): com.bumptech.glide.GenericRequestBuilder;
				public imageDecoder(param0: com.bumptech.glide.load.ResourceDecoder): com.bumptech.glide.BitmapRequestBuilder;
				public diskCacheStrategy(param0: com.bumptech.glide.load.engine.DiskCacheStrategy): com.bumptech.glide.BitmapRequestBuilder;
				public signature(param0: com.bumptech.glide.load.Key): com.bumptech.glide.GenericRequestBuilder;
				public fallback(param0: androidgraphicsdrawableDrawable): com.bumptech.glide.BitmapRequestBuilder;
				public skipMemoryCache(param0: boolean): com.bumptech.glide.BitmapRequestBuilder;
				public clone(): com.bumptech.glide.GenericRequestBuilder;
				public decoder(param0: com.bumptech.glide.load.ResourceDecoder): com.bumptech.glide.BitmapRequestBuilder;
				public transform(param0: native.Array<com.bumptech.glide.load.resource.bitmap.BitmapTransformation>): com.bumptech.glide.BitmapRequestBuilder;
				public fallback(param0: androidgraphicsdrawableDrawable): com.bumptech.glide.GenericRequestBuilder;
			}
		}
	}
}

import javalangClass = java.lang.Class;
import androidgraphicsBitmapCompressFormat = android.graphics.Bitmap.CompressFormat;
/// <reference path="./com.bumptech.glide.BitmapRequestBuilder.d.ts" />
/// <reference path="./com.bumptech.glide.GenericRequestBuilder.d.ts" />
/// <reference path="./com.bumptech.glide.load.resource.transcode.ResourceTranscoder.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export class BitmapTypeRequest extends com.bumptech.glide.BitmapRequestBuilder {
				public toBytes(param0: androidgraphicsBitmapCompressFormat, param1: number): com.bumptech.glide.BitmapRequestBuilder;
				public fitCenter(): com.bumptech.glide.GenericRequestBuilder;
				public centerCrop(): com.bumptech.glide.BitmapRequestBuilder;
				public toBytes(): com.bumptech.glide.BitmapRequestBuilder;
				public fitCenter(): com.bumptech.glide.BitmapRequestBuilder;
				public centerCrop(): com.bumptech.glide.GenericRequestBuilder;
				public transcode(param0: com.bumptech.glide.load.resource.transcode.ResourceTranscoder, param1: javalangClass): com.bumptech.glide.BitmapRequestBuilder;
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.request.FutureTarget.d.ts" />
/// <reference path="./com.bumptech.glide.request.target.Target.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export class DownloadOptions {
				/**
				 * Constructs a new instance of the com.bumptech.glide.DownloadOptions interface with the provided implementation.
				 */
				public constructor(implementation: {
					downloadOnly(param0: com.bumptech.glide.request.target.Target): com.bumptech.glide.request.target.Target;
					downloadOnly(param0: number, param1: number): com.bumptech.glide.request.FutureTarget;
				});
				public downloadOnly(param0: number, param1: number): com.bumptech.glide.request.FutureTarget;
				public downloadOnly(param0: com.bumptech.glide.request.target.Target): com.bumptech.glide.request.target.Target;
			}
		}
	}
}

/// <reference path="./android.view.animation.Animation.d.ts" />
/// <reference path="./com.bumptech.glide.GenericRequestBuilder.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export class DrawableOptions {
				/**
				 * Constructs a new instance of the com.bumptech.glide.DrawableOptions interface with the provided implementation.
				 */
				public constructor(implementation: {
					crossFade(): com.bumptech.glide.GenericRequestBuilder;
					crossFade(param0: number): com.bumptech.glide.GenericRequestBuilder;
					crossFade(param0: androidviewanimationAnimation, param1: number): com.bumptech.glide.GenericRequestBuilder;
					crossFade(param0: number, param1: number): com.bumptech.glide.GenericRequestBuilder;
				});
				public crossFade(): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(param0: number, param1: number): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(param0: androidviewanimationAnimation, param1: number): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(param0: number): com.bumptech.glide.GenericRequestBuilder;
			}
		}
	}
}

/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.view.animation.Animation.d.ts" />
/// <reference path="./android.widget.ImageView.d.ts" />
/// <reference path="./com.bumptech.glide.GenericRequestBuilder.d.ts" />
/// <reference path="./com.bumptech.glide.Priority.d.ts" />
/// <reference path="./com.bumptech.glide.load.Encoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.Key.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceDecoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceEncoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.Transformation.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.DiskCacheStrategy.d.ts" />
/// <reference path="./com.bumptech.glide.load.resource.bitmap.BitmapTransformation.d.ts" />
/// <reference path="./com.bumptech.glide.load.resource.transcode.ResourceTranscoder.d.ts" />
/// <reference path="./com.bumptech.glide.request.FutureTarget.d.ts" />
/// <reference path="./com.bumptech.glide.request.RequestListener.d.ts" />
/// <reference path="./com.bumptech.glide.request.target.Target.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export class DrawableRequestBuilder extends com.bumptech.glide.GenericRequestBuilder implements com.bumptech.glide.BitmapOptions, com.bumptech.glide.DrawableOptions {
				public fallback(param0: androidgraphicsdrawableDrawable): com.bumptech.glide.DrawableRequestBuilder;
				public decoder(param0: com.bumptech.glide.load.ResourceDecoder): com.bumptech.glide.GenericRequestBuilder;
				public sourceEncoder(param0: com.bumptech.glide.load.Encoder): com.bumptech.glide.DrawableRequestBuilder;
				public transform(param0: native.Array<com.bumptech.glide.load.resource.bitmap.BitmapTransformation>): com.bumptech.glide.DrawableRequestBuilder;
				public crossFade(param0: androidviewanimationAnimation, param1: number): com.bumptech.glide.DrawableRequestBuilder;
				public error(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public listener(param0: com.bumptech.glide.request.RequestListener): com.bumptech.glide.DrawableRequestBuilder;
				public animate(param0: androidviewanimationAnimation): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(): com.bumptech.glide.GenericRequestBuilder;
				public transcoder(param0: com.bumptech.glide.load.resource.transcode.ResourceTranscoder): com.bumptech.glide.DrawableRequestBuilder;
				public crossFade(param0: number, param1: number): com.bumptech.glide.DrawableRequestBuilder;
				public error(param0: androidgraphicsdrawableDrawable): com.bumptech.glide.GenericRequestBuilder;
				public bitmapTransform(param0: native.Array<com.bumptech.glide.load.Transformation>): com.bumptech.glide.DrawableRequestBuilder;
				public sourceEncoder(param0: com.bumptech.glide.load.Encoder): com.bumptech.glide.GenericRequestBuilder;
				public animate(param0: com.bumptech.glide.request.animation.ViewPropertyAnimation.Animator): com.bumptech.glide.GenericRequestBuilder;
				public thumbnail(param0: com.bumptech.glide.DrawableRequestBuilder): com.bumptech.glide.DrawableRequestBuilder;
				public thumbnail(param0: com.bumptech.glide.GenericRequestBuilder): com.bumptech.glide.DrawableRequestBuilder;
				public diskCacheStrategy(param0: com.bumptech.glide.load.engine.DiskCacheStrategy): com.bumptech.glide.DrawableRequestBuilder;
				public animate(param0: com.bumptech.glide.request.animation.ViewPropertyAnimation.Animator): com.bumptech.glide.DrawableRequestBuilder;
				public listener(param0: com.bumptech.glide.request.RequestListener): com.bumptech.glide.GenericRequestBuilder;
				public dontAnimate(): com.bumptech.glide.DrawableRequestBuilder;
				public centerCrop(): com.bumptech.glide.GenericRequestBuilder;
				public dontAnimate(): com.bumptech.glide.GenericRequestBuilder;
				public into(param0: number, param1: number): com.bumptech.glide.request.FutureTarget;
				public sizeMultiplier(param0: number): com.bumptech.glide.DrawableRequestBuilder;
				public cacheDecoder(param0: com.bumptech.glide.load.ResourceDecoder): com.bumptech.glide.GenericRequestBuilder;
				public priority(param0: com.bumptech.glide.Priority): com.bumptech.glide.DrawableRequestBuilder;
				public fitCenter(): com.bumptech.glide.GenericRequestBuilder;
				public sizeMultiplier(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(param0: androidviewanimationAnimation, param1: number): com.bumptech.glide.GenericRequestBuilder;
				public priority(param0: com.bumptech.glide.Priority): com.bumptech.glide.GenericRequestBuilder;
				public animate(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public placeholder(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public transform(param0: native.Array<com.bumptech.glide.load.Transformation>): com.bumptech.glide.DrawableRequestBuilder;
				public load(param0: javalangObject): com.bumptech.glide.DrawableRequestBuilder;
				public encoder(param0: com.bumptech.glide.load.ResourceEncoder): com.bumptech.glide.DrawableRequestBuilder;
				public cacheDecoder(param0: com.bumptech.glide.load.ResourceDecoder): com.bumptech.glide.DrawableRequestBuilder;
				public thumbnail(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public diskCacheStrategy(param0: com.bumptech.glide.load.engine.DiskCacheStrategy): com.bumptech.glide.GenericRequestBuilder;
				public animate(param0: androidviewanimationAnimation): com.bumptech.glide.DrawableRequestBuilder;
				public fallback(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public error(param0: androidgraphicsdrawableDrawable): com.bumptech.glide.DrawableRequestBuilder;
				public skipMemoryCache(param0: boolean): com.bumptech.glide.DrawableRequestBuilder;
				public transcoder(param0: com.bumptech.glide.load.resource.transcode.ResourceTranscoder): com.bumptech.glide.GenericRequestBuilder;
				public dontTransform(): com.bumptech.glide.DrawableRequestBuilder;
				public encoder(param0: com.bumptech.glide.load.ResourceEncoder): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(param0: number, param1: number): com.bumptech.glide.GenericRequestBuilder;
				public override(param0: number, param1: number): com.bumptech.glide.GenericRequestBuilder;
				public into(param0: androidwidgetImageView): com.bumptech.glide.request.target.Target;
				public fallback(param0: number): com.bumptech.glide.DrawableRequestBuilder;
				public override(param0: number, param1: number): com.bumptech.glide.DrawableRequestBuilder;
				public transform(param0: native.Array<com.bumptech.glide.load.Transformation>): com.bumptech.glide.GenericRequestBuilder;
				public placeholder(param0: androidgraphicsdrawableDrawable): com.bumptech.glide.DrawableRequestBuilder;
				public fitCenter(): com.bumptech.glide.DrawableRequestBuilder;
				public signature(param0: com.bumptech.glide.load.Key): com.bumptech.glide.DrawableRequestBuilder;
				public error(param0: number): com.bumptech.glide.DrawableRequestBuilder;
				public into(param0: com.bumptech.glide.request.target.Target): com.bumptech.glide.request.target.Target;
				public thumbnail(param0: com.bumptech.glide.GenericRequestBuilder): com.bumptech.glide.GenericRequestBuilder;
				public decoder(param0: com.bumptech.glide.load.ResourceDecoder): com.bumptech.glide.DrawableRequestBuilder;
				public animate(param0: number): com.bumptech.glide.DrawableRequestBuilder;
				public placeholder(param0: androidgraphicsdrawableDrawable): com.bumptech.glide.GenericRequestBuilder;
				public dontTransform(): com.bumptech.glide.GenericRequestBuilder;
				public placeholder(param0: number): com.bumptech.glide.DrawableRequestBuilder;
				public centerCrop(): com.bumptech.glide.DrawableRequestBuilder;
				public clone(): com.bumptech.glide.DrawableRequestBuilder;
				public crossFade(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public skipMemoryCache(param0: boolean): com.bumptech.glide.GenericRequestBuilder;
				public load(param0: javalangObject): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(): com.bumptech.glide.DrawableRequestBuilder;
				public signature(param0: com.bumptech.glide.load.Key): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(param0: number): com.bumptech.glide.DrawableRequestBuilder;
				public clone(): com.bumptech.glide.GenericRequestBuilder;
				public fallback(param0: androidgraphicsdrawableDrawable): com.bumptech.glide.GenericRequestBuilder;
				public thumbnail(param0: number): com.bumptech.glide.DrawableRequestBuilder;
			}
		}
	}
}

/// <reference path="./android.view.animation.Animation.d.ts" />
/// <reference path="./com.bumptech.glide.BitmapTypeRequest.d.ts" />
/// <reference path="./com.bumptech.glide.DrawableRequestBuilder.d.ts" />
/// <reference path="./com.bumptech.glide.GenericRequestBuilder.d.ts" />
/// <reference path="./com.bumptech.glide.GifTypeRequest.d.ts" />
/// <reference path="./com.bumptech.glide.request.FutureTarget.d.ts" />
/// <reference path="./com.bumptech.glide.request.target.Target.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export class DrawableTypeRequest extends com.bumptech.glide.DrawableRequestBuilder implements com.bumptech.glide.DownloadOptions {
				public centerCrop(): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(param0: androidviewanimationAnimation, param1: number): com.bumptech.glide.DrawableRequestBuilder;
				public centerCrop(): com.bumptech.glide.DrawableRequestBuilder;
				public asGif(): com.bumptech.glide.GifTypeRequest;
				public crossFade(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(param0: number, param1: number): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(): com.bumptech.glide.DrawableRequestBuilder;
				public fitCenter(): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(param0: androidviewanimationAnimation, param1: number): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(param0: number, param1: number): com.bumptech.glide.DrawableRequestBuilder;
				public crossFade(param0: number): com.bumptech.glide.DrawableRequestBuilder;
				public asBitmap(): com.bumptech.glide.BitmapTypeRequest;
				public downloadOnly(param0: number, param1: number): com.bumptech.glide.request.FutureTarget;
				public downloadOnly(param0: com.bumptech.glide.request.target.Target): com.bumptech.glide.request.target.Target;
				public fitCenter(): com.bumptech.glide.DrawableRequestBuilder;
			}
		}
	}
}

import androidcontentContext = android.content.Context;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.view.animation.Animation.d.ts" />
/// <reference path="./android.widget.ImageView.d.ts" />
/// <reference path="./com.bumptech.glide.Glide.d.ts" />
/// <reference path="./com.bumptech.glide.Priority.d.ts" />
/// <reference path="./com.bumptech.glide.load.Encoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.Key.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceDecoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceEncoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.Transformation.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.DiskCacheStrategy.d.ts" />
/// <reference path="./com.bumptech.glide.load.resource.transcode.ResourceTranscoder.d.ts" />
/// <reference path="./com.bumptech.glide.manager.Lifecycle.d.ts" />
/// <reference path="./com.bumptech.glide.manager.RequestTracker.d.ts" />
/// <reference path="./com.bumptech.glide.request.FutureTarget.d.ts" />
/// <reference path="./com.bumptech.glide.request.RequestListener.d.ts" />
/// <reference path="./com.bumptech.glide.request.target.Target.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export class GenericRequestBuilder {
				public modelClass: javalangClass;
				public context: androidcontentContext;
				public glide: com.bumptech.glide.Glide;
				public transcodeClass: javalangClass;
				public requestTracker: com.bumptech.glide.manager.RequestTracker;
				public lifecycle: com.bumptech.glide.manager.Lifecycle;
				public fallback(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public decoder(param0: com.bumptech.glide.load.ResourceDecoder): com.bumptech.glide.GenericRequestBuilder;
				public transcoder(param0: com.bumptech.glide.load.resource.transcode.ResourceTranscoder): com.bumptech.glide.GenericRequestBuilder;
				public encoder(param0: com.bumptech.glide.load.ResourceEncoder): com.bumptech.glide.GenericRequestBuilder;
				public error(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public animate(param0: androidviewanimationAnimation): com.bumptech.glide.GenericRequestBuilder;
				public override(param0: number, param1: number): com.bumptech.glide.GenericRequestBuilder;
				public into(param0: androidwidgetImageView): com.bumptech.glide.request.target.Target;
				public error(param0: androidgraphicsdrawableDrawable): com.bumptech.glide.GenericRequestBuilder;
				public preload(): com.bumptech.glide.request.target.Target;
				public sourceEncoder(param0: com.bumptech.glide.load.Encoder): com.bumptech.glide.GenericRequestBuilder;
				public transform(param0: native.Array<com.bumptech.glide.load.Transformation>): com.bumptech.glide.GenericRequestBuilder;
				public animate(param0: com.bumptech.glide.request.animation.ViewPropertyAnimation.Animator): com.bumptech.glide.GenericRequestBuilder;
				public listener(param0: com.bumptech.glide.request.RequestListener): com.bumptech.glide.GenericRequestBuilder;
				public into(param0: com.bumptech.glide.request.target.Target): com.bumptech.glide.request.target.Target;
				public thumbnail(param0: com.bumptech.glide.GenericRequestBuilder): com.bumptech.glide.GenericRequestBuilder;
				public dontTransform(): com.bumptech.glide.GenericRequestBuilder;
				public placeholder(param0: androidgraphicsdrawableDrawable): com.bumptech.glide.GenericRequestBuilder;
				public dontAnimate(): com.bumptech.glide.GenericRequestBuilder;
				public skipMemoryCache(param0: boolean): com.bumptech.glide.GenericRequestBuilder;
				public into(param0: number, param1: number): com.bumptech.glide.request.FutureTarget;
				public cacheDecoder(param0: com.bumptech.glide.load.ResourceDecoder): com.bumptech.glide.GenericRequestBuilder;
				public load(param0: javalangObject): com.bumptech.glide.GenericRequestBuilder;
				public preload(param0: number, param1: number): com.bumptech.glide.request.target.Target;
				public sizeMultiplier(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public priority(param0: com.bumptech.glide.Priority): com.bumptech.glide.GenericRequestBuilder;
				public signature(param0: com.bumptech.glide.load.Key): com.bumptech.glide.GenericRequestBuilder;
				public animate(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public placeholder(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public clone(): com.bumptech.glide.GenericRequestBuilder;
				public thumbnail(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public fallback(param0: androidgraphicsdrawableDrawable): com.bumptech.glide.GenericRequestBuilder;
				public diskCacheStrategy(param0: com.bumptech.glide.load.engine.DiskCacheStrategy): com.bumptech.glide.GenericRequestBuilder;
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.GenericRequestBuilder.d.ts" />
/// <reference path="./com.bumptech.glide.load.resource.transcode.ResourceTranscoder.d.ts" />
/// <reference path="./com.bumptech.glide.request.FutureTarget.d.ts" />
/// <reference path="./com.bumptech.glide.request.target.Target.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export class GenericTranscodeRequest extends com.bumptech.glide.GenericRequestBuilder implements com.bumptech.glide.DownloadOptions {
				public transcode(param0: com.bumptech.glide.load.resource.transcode.ResourceTranscoder, param1: javalangClass): com.bumptech.glide.GenericRequestBuilder;
				public downloadOnly(param0: number, param1: number): com.bumptech.glide.request.FutureTarget;
				public downloadOnly(param0: com.bumptech.glide.request.target.Target): com.bumptech.glide.request.target.Target;
			}
		}
	}
}

/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.view.animation.Animation.d.ts" />
/// <reference path="./com.bumptech.glide.GenericRequestBuilder.d.ts" />
/// <reference path="./com.bumptech.glide.Priority.d.ts" />
/// <reference path="./com.bumptech.glide.load.Encoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.Key.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceDecoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceEncoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.Transformation.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.DiskCacheStrategy.d.ts" />
/// <reference path="./com.bumptech.glide.load.resource.bitmap.BitmapTransformation.d.ts" />
/// <reference path="./com.bumptech.glide.load.resource.transcode.ResourceTranscoder.d.ts" />
/// <reference path="./com.bumptech.glide.request.RequestListener.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export class GifRequestBuilder extends com.bumptech.glide.GenericRequestBuilder implements com.bumptech.glide.BitmapOptions, com.bumptech.glide.DrawableOptions {
				public crossFade(): com.bumptech.glide.GifRequestBuilder;
				public decoder(param0: com.bumptech.glide.load.ResourceDecoder): com.bumptech.glide.GenericRequestBuilder;
				public encoder(param0: com.bumptech.glide.load.ResourceEncoder): com.bumptech.glide.GifRequestBuilder;
				public transcoder(param0: com.bumptech.glide.load.resource.transcode.ResourceTranscoder): com.bumptech.glide.GifRequestBuilder;
				public error(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(param0: number): com.bumptech.glide.GifRequestBuilder;
				public animate(param0: androidviewanimationAnimation): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(): com.bumptech.glide.GenericRequestBuilder;
				public centerCrop(): com.bumptech.glide.GifRequestBuilder;
				public fallback(param0: androidgraphicsdrawableDrawable): com.bumptech.glide.GifRequestBuilder;
				public error(param0: androidgraphicsdrawableDrawable): com.bumptech.glide.GenericRequestBuilder;
				public sourceEncoder(param0: com.bumptech.glide.load.Encoder): com.bumptech.glide.GenericRequestBuilder;
				public animate(param0: com.bumptech.glide.request.animation.ViewPropertyAnimation.Animator): com.bumptech.glide.GenericRequestBuilder;
				public animate(param0: number): com.bumptech.glide.GifRequestBuilder;
				public animate(param0: androidviewanimationAnimation): com.bumptech.glide.GifRequestBuilder;
				public listener(param0: com.bumptech.glide.request.RequestListener): com.bumptech.glide.GenericRequestBuilder;
				public centerCrop(): com.bumptech.glide.GenericRequestBuilder;
				public animate(param0: com.bumptech.glide.request.animation.ViewPropertyAnimation.Animator): com.bumptech.glide.GifRequestBuilder;
				public dontAnimate(): com.bumptech.glide.GenericRequestBuilder;
				public cacheDecoder(param0: com.bumptech.glide.load.ResourceDecoder): com.bumptech.glide.GenericRequestBuilder;
				public error(param0: number): com.bumptech.glide.GifRequestBuilder;
				public fitCenter(): com.bumptech.glide.GenericRequestBuilder;
				public sizeMultiplier(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public clone(): com.bumptech.glide.GifRequestBuilder;
				public crossFade(param0: androidviewanimationAnimation, param1: number): com.bumptech.glide.GenericRequestBuilder;
				public priority(param0: com.bumptech.glide.Priority): com.bumptech.glide.GenericRequestBuilder;
				public dontAnimate(): com.bumptech.glide.GifRequestBuilder;
				public animate(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public placeholder(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public dontTransform(): com.bumptech.glide.GifRequestBuilder;
				public thumbnail(param0: com.bumptech.glide.GenericRequestBuilder): com.bumptech.glide.GifRequestBuilder;
				public thumbnail(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public error(param0: androidgraphicsdrawableDrawable): com.bumptech.glide.GifRequestBuilder;
				public cacheDecoder(param0: com.bumptech.glide.load.ResourceDecoder): com.bumptech.glide.GifRequestBuilder;
				public diskCacheStrategy(param0: com.bumptech.glide.load.engine.DiskCacheStrategy): com.bumptech.glide.GenericRequestBuilder;
				public fallback(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public override(param0: number, param1: number): com.bumptech.glide.GifRequestBuilder;
				public sizeMultiplier(param0: number): com.bumptech.glide.GifRequestBuilder;
				public transcoder(param0: com.bumptech.glide.load.resource.transcode.ResourceTranscoder): com.bumptech.glide.GenericRequestBuilder;
				public thumbnail(param0: number): com.bumptech.glide.GifRequestBuilder;
				public load(param0: javalangObject): com.bumptech.glide.GifRequestBuilder;
				public encoder(param0: com.bumptech.glide.load.ResourceEncoder): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(param0: number, param1: number): com.bumptech.glide.GenericRequestBuilder;
				public override(param0: number, param1: number): com.bumptech.glide.GenericRequestBuilder;
				public placeholder(param0: number): com.bumptech.glide.GifRequestBuilder;
				public transformFrame(param0: native.Array<com.bumptech.glide.load.resource.bitmap.BitmapTransformation>): com.bumptech.glide.GifRequestBuilder;
				public signature(param0: com.bumptech.glide.load.Key): com.bumptech.glide.GifRequestBuilder;
				public placeholder(param0: androidgraphicsdrawableDrawable): com.bumptech.glide.GifRequestBuilder;
				public skipMemoryCache(param0: boolean): com.bumptech.glide.GifRequestBuilder;
				public listener(param0: com.bumptech.glide.request.RequestListener): com.bumptech.glide.GifRequestBuilder;
				public transform(param0: native.Array<com.bumptech.glide.load.Transformation>): com.bumptech.glide.GenericRequestBuilder;
				public diskCacheStrategy(param0: com.bumptech.glide.load.engine.DiskCacheStrategy): com.bumptech.glide.GifRequestBuilder;
				public crossFade(param0: number, param1: number): com.bumptech.glide.GifRequestBuilder;
				public fitCenter(): com.bumptech.glide.GifRequestBuilder;
				public thumbnail(param0: com.bumptech.glide.GenericRequestBuilder): com.bumptech.glide.GenericRequestBuilder;
				public transform(param0: native.Array<com.bumptech.glide.load.Transformation>): com.bumptech.glide.GifRequestBuilder;
				public placeholder(param0: androidgraphicsdrawableDrawable): com.bumptech.glide.GenericRequestBuilder;
				public dontTransform(): com.bumptech.glide.GenericRequestBuilder;
				public transformFrame(param0: native.Array<com.bumptech.glide.load.Transformation>): com.bumptech.glide.GifRequestBuilder;
				public sourceEncoder(param0: com.bumptech.glide.load.Encoder): com.bumptech.glide.GifRequestBuilder;
				public crossFade(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public skipMemoryCache(param0: boolean): com.bumptech.glide.GenericRequestBuilder;
				public load(param0: javalangObject): com.bumptech.glide.GenericRequestBuilder;
				public signature(param0: com.bumptech.glide.load.Key): com.bumptech.glide.GenericRequestBuilder;
				public fallback(param0: number): com.bumptech.glide.GifRequestBuilder;
				public clone(): com.bumptech.glide.GenericRequestBuilder;
				public thumbnail(param0: com.bumptech.glide.GifRequestBuilder): com.bumptech.glide.GifRequestBuilder;
				public decoder(param0: com.bumptech.glide.load.ResourceDecoder): com.bumptech.glide.GifRequestBuilder;
				public fallback(param0: androidgraphicsdrawableDrawable): com.bumptech.glide.GenericRequestBuilder;
				public priority(param0: com.bumptech.glide.Priority): com.bumptech.glide.GifRequestBuilder;
				public crossFade(param0: androidviewanimationAnimation, param1: number): com.bumptech.glide.GifRequestBuilder;
			}
		}
	}
}

/// <reference path="./android.view.animation.Animation.d.ts" />
/// <reference path="./com.bumptech.glide.GenericRequestBuilder.d.ts" />
/// <reference path="./com.bumptech.glide.GifRequestBuilder.d.ts" />
/// <reference path="./com.bumptech.glide.load.resource.transcode.ResourceTranscoder.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export class GifTypeRequest extends com.bumptech.glide.GifRequestBuilder {
				public crossFade(): com.bumptech.glide.GifRequestBuilder;
				public crossFade(param0: number, param1: number): com.bumptech.glide.GifRequestBuilder;
				public transcode(param0: com.bumptech.glide.load.resource.transcode.ResourceTranscoder, param1: javalangClass): com.bumptech.glide.GenericRequestBuilder;
				public fitCenter(): com.bumptech.glide.GifRequestBuilder;
				public centerCrop(): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public toBytes(): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(param0: number): com.bumptech.glide.GifRequestBuilder;
				public crossFade(): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(param0: number, param1: number): com.bumptech.glide.GenericRequestBuilder;
				public fitCenter(): com.bumptech.glide.GenericRequestBuilder;
				public centerCrop(): com.bumptech.glide.GifRequestBuilder;
				public crossFade(param0: androidviewanimationAnimation, param1: number): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(param0: androidviewanimationAnimation, param1: number): com.bumptech.glide.GifRequestBuilder;
			}
		}
	}
}

import javaioFile = java.io.File;
import androidviewView = android.view.View;
import androidappActivity = android.app.Activity;
import androidsupportv4appFragmentActivity = android.support.v4.app.FragmentActivity;
import androidappFragment = android.app.Fragment;
import androidsupportv4appFragment = android.support.v4.app.Fragment;
import javalangException = java.lang.Exception;
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.app.Fragment.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.support.v4.app.Fragment.d.ts" />
/// <reference path="./android.support.v4.app.FragmentActivity.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.bumptech.glide.GlideBuilder.d.ts" />
/// <reference path="./com.bumptech.glide.MemoryCategory.d.ts" />
/// <reference path="./com.bumptech.glide.RequestManager.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ModelLoader.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ModelLoaderFactory.d.ts" />
/// <reference path="./com.bumptech.glide.request.FutureTarget.d.ts" />
/// <reference path="./com.bumptech.glide.request.Request.d.ts" />
/// <reference path="./com.bumptech.glide.request.animation.GlideAnimation.d.ts" />
/// <reference path="./com.bumptech.glide.request.target.SizeReadyCallback.d.ts" />
/// <reference path="./com.bumptech.glide.request.target.Target.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export class Glide {
				public setMemoryCategory(param0: com.bumptech.glide.MemoryCategory): void;
				public static with(param0: androidsupportv4appFragment): com.bumptech.glide.RequestManager;
				public static buildModelLoader(param0: javalangClass, param1: javalangClass, param2: androidcontentContext): com.bumptech.glide.load.model.ModelLoader;
				public static buildStreamModelLoader(param0: javalangClass, param1: androidcontentContext): com.bumptech.glide.load.model.ModelLoader;
				public static clear(param0: androidviewView): void;
				public static getPhotoCacheDir(param0: androidcontentContext, param1: string): javaioFile;
				public static isSetup(): boolean;
				public static with(param0: androidappActivity): com.bumptech.glide.RequestManager;
				public static buildModelLoader(param0: javalangObject, param1: javalangClass, param2: androidcontentContext): com.bumptech.glide.load.model.ModelLoader;
				public static with(param0: androidappFragment): com.bumptech.glide.RequestManager;
				public preFillBitmapPool(param0: native.Array<com.bumptech.glide.load.engine.prefill.PreFillType.Builder>): void;
				public static buildStreamModelLoader(param0: javalangObject, param1: androidcontentContext): com.bumptech.glide.load.model.ModelLoader;
				public static setup(param0: com.bumptech.glide.GlideBuilder): void;
				public static clear(param0: com.bumptech.glide.request.target.Target): void;
				public unregister(param0: javalangClass, param1: javalangClass): void;
				public static getPhotoCacheDir(param0: androidcontentContext): javaioFile;
				public trimMemory(param0: number): void;
				public register(param0: javalangClass, param1: javalangClass, param2: com.bumptech.glide.load.model.ModelLoaderFactory): void;
				public static get(param0: androidcontentContext): com.bumptech.glide.Glide;
				public clearDiskCache(): void;
				public static clear(param0: com.bumptech.glide.request.FutureTarget): void;
				public getBitmapPool(): com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool;
				public static with(param0: androidcontentContext): com.bumptech.glide.RequestManager;
				public clearMemory(): void;
				public static buildFileDescriptorModelLoader(param0: javalangClass, param1: androidcontentContext): com.bumptech.glide.load.model.ModelLoader;
				public static buildFileDescriptorModelLoader(param0: javalangObject, param1: androidcontentContext): com.bumptech.glide.load.model.ModelLoader;
				public static with(param0: androidsupportv4appFragmentActivity): com.bumptech.glide.RequestManager;
			}
			export module Glide {
				export class ClearTarget extends com.bumptech.glide.request.target.ViewTarget {
					public onLoadCleared(param0: androidgraphicsdrawableDrawable): void;
					public constructor();
					public onResourceReady(param0: javalangObject, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
					public getRequest(): com.bumptech.glide.request.Request;
					public constructor(param0: androidviewView);
					public setRequest(param0: com.bumptech.glide.request.Request): void;
					public onLoadStarted(param0: androidgraphicsdrawableDrawable): void;
					public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public onLoadFailed(param0: javalangException, param1: androidgraphicsdrawableDrawable): void;
				}
			}
		}
	}
}

import javautilconcurrentExecutorService = java.util.concurrent.ExecutorService;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.bumptech.glide.load.DecodeFormat.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.cache.DiskCache.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.cache.MemoryCache.d.ts" />
/// <reference path="./java.util.concurrent.ExecutorService.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export class GlideBuilder {
				public setDiskCache(param0: com.bumptech.glide.load.engine.cache.DiskCache.Factory): com.bumptech.glide.GlideBuilder;
				public setDiskCacheService(param0: javautilconcurrentExecutorService): com.bumptech.glide.GlideBuilder;
				public setBitmapPool(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool): com.bumptech.glide.GlideBuilder;
				public setDecodeFormat(param0: com.bumptech.glide.load.DecodeFormat): com.bumptech.glide.GlideBuilder;
				public constructor(param0: androidcontentContext);
				public setDiskCache(param0: com.bumptech.glide.load.engine.cache.DiskCache): com.bumptech.glide.GlideBuilder;
				public setResizeService(param0: javautilconcurrentExecutorService): com.bumptech.glide.GlideBuilder;
				public setMemoryCache(param0: com.bumptech.glide.load.engine.cache.MemoryCache): com.bumptech.glide.GlideBuilder;
			}
		}
	}
}

import androidwidgetAbsListView = android.widget.AbsListView;
import javautilList = java.util.List;
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.widget.AbsListView.d.ts" />
/// <reference path="./com.bumptech.glide.GenericRequestBuilder.d.ts" />
/// <reference path="./com.bumptech.glide.request.Request.d.ts" />
/// <reference path="./com.bumptech.glide.request.animation.GlideAnimation.d.ts" />
/// <reference path="./com.bumptech.glide.request.target.SizeReadyCallback.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export class ListPreloader {
				public getItems(param0: number, param1: number): javautilList;
				public getRequestBuilder(param0: javalangObject): com.bumptech.glide.GenericRequestBuilder;
				public onScrollStateChanged(param0: androidwidgetAbsListView, param1: number): void;
				public constructor(param0: com.bumptech.glide.ListPreloader.PreloadModelProvider, param1: com.bumptech.glide.ListPreloader.PreloadSizeProvider, param2: number);
				public constructor(param0: number);
				public getDimensions(param0: javalangObject): native.Array<number>;
				public onScroll(param0: androidwidgetAbsListView, param1: number, param2: number, param3: number): void;
			}
			export module ListPreloader {
				export class PreloadModelProvider {
					/**
					 * Constructs a new instance of the com.bumptech.glide.ListPreloader$PreloadModelProvider interface with the provided implementation.
					 */
					public constructor(implementation: {
						getPreloadItems(param0: number): javautilList;
						getPreloadRequestBuilder(param0: javalangObject): com.bumptech.glide.GenericRequestBuilder;
					});
					public getPreloadRequestBuilder(param0: javalangObject): com.bumptech.glide.GenericRequestBuilder;
					public getPreloadItems(param0: number): javautilList;
				}
				export class PreloadSizeProvider {
					/**
					 * Constructs a new instance of the com.bumptech.glide.ListPreloader$PreloadSizeProvider interface with the provided implementation.
					 */
					public constructor(implementation: {
						getPreloadSize(param0: javalangObject, param1: number, param2: number): native.Array<number>;
					});
					public getPreloadSize(param0: javalangObject, param1: number, param2: number): native.Array<number>;
				}
				export class PreloadTarget extends com.bumptech.glide.request.target.BaseTarget {
					public onLoadCleared(param0: androidgraphicsdrawableDrawable): void;
					public onResourceReady(param0: javalangObject, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
					public getRequest(): com.bumptech.glide.request.Request;
					public setRequest(param0: com.bumptech.glide.request.Request): void;
					public onLoadStarted(param0: androidgraphicsdrawableDrawable): void;
					public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public onLoadFailed(param0: javalangException, param1: androidgraphicsdrawableDrawable): void;
				}
				export class PreloadTargetQueue {
					public next(param0: number, param1: number): com.bumptech.glide.ListPreloader.PreloadTarget;
					public constructor(param0: number);
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export class MemoryCategory {
				public static LOW: com.bumptech.glide.MemoryCategory;
				public static NORMAL: com.bumptech.glide.MemoryCategory;
				public static HIGH: com.bumptech.glide.MemoryCategory;
				public getMultiplier(): number;
				public static values(): native.Array<com.bumptech.glide.MemoryCategory>;
				public static valueOf(param0: string): com.bumptech.glide.MemoryCategory;
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export class Priority {
				public static IMMEDIATE: com.bumptech.glide.Priority;
				public static HIGH: com.bumptech.glide.Priority;
				public static NORMAL: com.bumptech.glide.Priority;
				public static LOW: com.bumptech.glide.Priority;
				public static priority: com.bumptech.glide.Priority;
				public static valueOf(param0: string): com.bumptech.glide.Priority;
				public static values(): native.Array<com.bumptech.glide.Priority>;
			}
		}
	}
}

import androidnetUri = android.net.Uri;
import javalangInteger = java.lang.Integer;
import javanetURL = java.net.URL;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./com.bumptech.glide.DrawableTypeRequest.d.ts" />
/// <reference path="./com.bumptech.glide.GenericRequestBuilder.d.ts" />
/// <reference path="./com.bumptech.glide.GenericTranscodeRequest.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ModelLoader.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.file_descriptor.FileDescriptorModelLoader.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.stream.StreamByteArrayLoader.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.stream.StreamModelLoader.d.ts" />
/// <reference path="./com.bumptech.glide.manager.Lifecycle.d.ts" />
/// <reference path="./com.bumptech.glide.manager.RequestManagerTreeNode.d.ts" />
/// <reference path="./com.bumptech.glide.manager.RequestTracker.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export class RequestManager {
				public using(param0: com.bumptech.glide.load.model.file_descriptor.FileDescriptorModelLoader): com.bumptech.glide.RequestManager.VideoModelRequest;
				public loadFromMediaStore(param0: androidnetUri, param1: string, param2: number, param3: number): com.bumptech.glide.DrawableTypeRequest;
				public load(param0: native.Array<number>): com.bumptech.glide.DrawableTypeRequest;
				public using(param0: com.bumptech.glide.load.model.stream.StreamModelLoader): com.bumptech.glide.RequestManager.ImageModelRequest;
				public loadFromMediaStore(param0: androidnetUri): com.bumptech.glide.DrawableTypeRequest;
				public constructor(param0: androidcontentContext, param1: com.bumptech.glide.manager.Lifecycle, param2: com.bumptech.glide.manager.RequestManagerTreeNode);
				public fromMediaStore(): com.bumptech.glide.DrawableTypeRequest;
				public fromResource(): com.bumptech.glide.DrawableTypeRequest;
				public using(param0: com.bumptech.glide.load.model.stream.StreamByteArrayLoader): com.bumptech.glide.RequestManager.ImageModelRequest;
				public onStop(): void;
				public onTrimMemory(param0: number): void;
				public pauseRequestsRecursive(): void;
				public load(param0: androidnetUri): com.bumptech.glide.DrawableTypeRequest;
				public resumeRequestsRecursive(): void;
				public load(param0: string): com.bumptech.glide.DrawableTypeRequest;
				public load(param0: native.Array<number>, param1: string): com.bumptech.glide.DrawableTypeRequest;
				public onLowMemory(): void;
				public load(param0: javaioFile): com.bumptech.glide.DrawableTypeRequest;
				public fromUri(): com.bumptech.glide.DrawableTypeRequest;
				public fromUrl(): com.bumptech.glide.DrawableTypeRequest;
				public load(param0: javalangObject): com.bumptech.glide.DrawableTypeRequest;
				public from(param0: javalangClass): com.bumptech.glide.DrawableTypeRequest;
				public load(param0: javalangInteger): com.bumptech.glide.DrawableTypeRequest;
				public setDefaultOptions(param0: com.bumptech.glide.RequestManager.DefaultOptions): void;
				public onStart(): void;
				public fromBytes(): com.bumptech.glide.DrawableTypeRequest;
				public fromFile(): com.bumptech.glide.DrawableTypeRequest;
				public resumeRequests(): void;
				public using(param0: com.bumptech.glide.load.model.ModelLoader, param1: javalangClass): com.bumptech.glide.RequestManager.GenericModelRequest;
				public onDestroy(): void;
				public fromString(): com.bumptech.glide.DrawableTypeRequest;
				public isPaused(): boolean;
				public pauseRequests(): void;
				public load(param0: javanetURL): com.bumptech.glide.DrawableTypeRequest;
			}
			export module RequestManager {
				export class DefaultOptions {
					/**
					 * Constructs a new instance of the com.bumptech.glide.RequestManager$DefaultOptions interface with the provided implementation.
					 */
					public constructor(implementation: {
						apply(param0: com.bumptech.glide.GenericRequestBuilder): void;
					});
					public apply(param0: com.bumptech.glide.GenericRequestBuilder): void;
				}
				export class GenericModelRequest {
					public from(param0: javalangClass): com.bumptech.glide.RequestManager.GenericModelRequest.GenericTypeRequest;
					public load(param0: javalangObject): com.bumptech.glide.RequestManager.GenericModelRequest.GenericTypeRequest;
				}
				export module GenericModelRequest {
					export class GenericTypeRequest {
						public as(param0: javalangClass): com.bumptech.glide.GenericTranscodeRequest;
					}
				}
				export class ImageModelRequest {
					public load(param0: javalangObject): com.bumptech.glide.DrawableTypeRequest;
					public from(param0: javalangClass): com.bumptech.glide.DrawableTypeRequest;
				}
				export class OptionsApplier {
					public apply(param0: com.bumptech.glide.GenericRequestBuilder): com.bumptech.glide.GenericRequestBuilder;
				}
				export class RequestManagerConnectivityListener {
					public onConnectivityChanged(param0: boolean): void;
					public constructor(param0: com.bumptech.glide.manager.RequestTracker);
				}
				export class VideoModelRequest {
					public load(param0: javalangObject): com.bumptech.glide.DrawableTypeRequest;
				}
			}
		}
	}
}

/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module disklrucache {
				export class DiskLruCache {
					public get(param0: string): com.bumptech.glide.disklrucache.DiskLruCache.Value;
					public edit(param0: string): com.bumptech.glide.disklrucache.DiskLruCache.Editor;
					public setMaxSize(param0: number): void;
					public delete(): void;
					public close(): void;
					public static open(param0: javaioFile, param1: number, param2: number, param3: number): com.bumptech.glide.disklrucache.DiskLruCache;
					public getDirectory(): javaioFile;
					public getMaxSize(): number;
					public size(): number;
					public flush(): void;
					public remove(param0: string): boolean;
					public isClosed(): boolean;
				}
				export module DiskLruCache {
					export class Editor {
						public set(param0: number, param1: string): void;
						public commit(): void;
						public getString(param0: number): string;
						public getFile(param0: number): javaioFile;
						public abortUnlessCommitted(): void;
						public abort(): void;
					}
					export class Entry {
						public getLengths(): string;
						public getCleanFile(param0: number): javaioFile;
						public getDirtyFile(param0: number): javaioFile;
					}
					export class Value {
						public getString(param0: number): string;
						public getFile(param0: number): javaioFile;
						public getLength(param0: number): number;
						public edit(): com.bumptech.glide.disklrucache.DiskLruCache.Editor;
					}
				}
			}
		}
	}
}

import javaioInputStream = java.io.InputStream;
import javaniocharsetCharset = java.nio.charset.Charset;
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.nio.charset.Charset.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module disklrucache {
				export class StrictLineReader {
					public readLine(): string;
					public hasUnterminatedLine(): boolean;
					public constructor(param0: javaioInputStream, param1: javaniocharsetCharset);
					public constructor(param0: javaioInputStream, param1: number, param2: javaniocharsetCharset);
					public close(): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module disklrucache {
				export class Util {
				}
			}
		}
	}
}

import androidgraphicsBitmap = android.graphics.Bitmap;
import androidgraphicsBitmapConfig = android.graphics.Bitmap.Config;
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./com.bumptech.glide.gifdecoder.GifHeader.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module gifdecoder {
				export class GifDecoder {
					public static STATUS_OK: number;
					public static STATUS_FORMAT_ERROR: number;
					public static STATUS_OPEN_ERROR: number;
					public static STATUS_PARTIAL_DECODE: number;
					public getCurrentFrameIndex(): number;
					public getHeight(): number;
					public read(param0: javaioInputStream, param1: number): number;
					public read(param0: native.Array<number>): number;
					public getWidth(): number;
					public getNextDelay(): number;
					public getDelay(param0: number): number;
					public getLoopCount(): number;
					public setData(param0: com.bumptech.glide.gifdecoder.GifHeader, param1: native.Array<number>): void;
					public constructor(param0: com.bumptech.glide.gifdecoder.GifDecoder.BitmapProvider);
					public advance(): void;
					public getData(): native.Array<number>;
					public clear(): void;
					public resetFrameIndex(): void;
					public getFrameCount(): number;
					public getNextFrame(): androidgraphicsBitmap;
					public getStatus(): number;
				}
				export module GifDecoder {
					export class BitmapProvider {
						/**
						 * Constructs a new instance of the com.bumptech.glide.gifdecoder.GifDecoder$BitmapProvider interface with the provided implementation.
						 */
						public constructor(implementation: {
							obtain(param0: number, param1: number, param2: androidgraphicsBitmapConfig): androidgraphicsBitmap;
							release(param0: androidgraphicsBitmap): void;
						});
						public obtain(param0: number, param1: number, param2: androidgraphicsBitmapConfig): androidgraphicsBitmap;
						public release(param0: androidgraphicsBitmap): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module gifdecoder {
				export class GifFrame {
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module gifdecoder {
				export class GifHeader {
					public constructor();
					public getHeight(): number;
					public getWidth(): number;
					public getNumFrames(): number;
					public getStatus(): number;
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.gifdecoder.GifHeader.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module gifdecoder {
				export class GifHeaderParser {
					public static TAG: string;
					public setData(param0: native.Array<number>): com.bumptech.glide.gifdecoder.GifHeaderParser;
					public constructor();
					public clear(): void;
					public parseHeader(): com.bumptech.glide.gifdecoder.GifHeader;
				}
			}
		}
	}
}

import javaioOutputStream = java.io.OutputStream;
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module gifencoder {
				export class AnimatedGifEncoder {
					public start(param0: javaioOutputStream): boolean;
					public setRepeat(param0: number): void;
					public setFrameRate(param0: number): void;
					public constructor();
					public start(param0: string): boolean;
					public setQuality(param0: number): void;
					public setTransparent(param0: number): void;
					public addFrame(param0: androidgraphicsBitmap): boolean;
					public setSize(param0: number, param1: number): void;
					public setDispose(param0: number): void;
					public finish(): boolean;
					public setDelay(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module gifencoder {
				export class LZWEncoder {
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module gifencoder {
				export class NeuQuant {
					public static netsize: number;
					public static prime1: number;
					public static prime2: number;
					public static prime3: number;
					public static prime4: number;
					public static minpicturebytes: number;
					public static maxnetpos: number;
					public static netbiasshift: number;
					public static ncycles: number;
					public static intbiasshift: number;
					public static intbias: number;
					public static gammashift: number;
					public static gamma: number;
					public static betashift: number;
					public static beta: number;
					public static betagamma: number;
					public static initrad: number;
					public static radiusbiasshift: number;
					public static radiusbias: number;
					public static initradius: number;
					public static radiusdec: number;
					public static alphabiasshift: number;
					public static initalpha: number;
					public alphadec: number;
					public static radbiasshift: number;
					public static radbias: number;
					public static alpharadbshift: number;
					public static alpharadbias: number;
					public thepicture: native.Array<number>;
					public lengthcount: number;
					public samplefac: number;
					public network: native.Array<native.Array<number>>;
					public netindex: native.Array<number>;
					public bias: native.Array<number>;
					public freq: native.Array<number>;
					public radpower: native.Array<number>;
					public contest(param0: number, param1: number, param2: number): number;
					public colorMap(): native.Array<number>;
					public process(): native.Array<number>;
					public altersingle(param0: number, param1: number, param2: number, param3: number, param4: number): void;
					public map(param0: number, param1: number, param2: number): number;
					public unbiasnet(): void;
					public constructor(param0: native.Array<number>, param1: number, param2: number);
					public learn(): void;
					public inxbuild(): void;
					public alterneigh(param0: number, param1: number, param2: number, param3: number, param4: number): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class DecodeFormat {
					public static ALWAYS_ARGB_8888: com.bumptech.glide.load.DecodeFormat;
					public static PREFER_ARGB_8888: com.bumptech.glide.load.DecodeFormat;
					public static PREFER_RGB_565: com.bumptech.glide.load.DecodeFormat;
					public static DEFAULT: com.bumptech.glide.load.DecodeFormat;
					public static values(): native.Array<com.bumptech.glide.load.DecodeFormat>;
					public static valueOf(param0: string): com.bumptech.glide.load.DecodeFormat;
				}
			}
		}
	}
}

/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class Encoder {
					/**
					 * Constructs a new instance of the com.bumptech.glide.load.Encoder interface with the provided implementation.
					 */
					public constructor(implementation: {
						encode(param0: javalangObject, param1: javaioOutputStream): boolean;
						getId(): string;
					});
					public getId(): string;
					public encode(param0: javalangObject, param1: javaioOutputStream): boolean;
				}
			}
		}
	}
}

import javasecurityMessageDigest = java.security.MessageDigest;
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.security.MessageDigest.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class Key {
					/**
					 * Constructs a new instance of the com.bumptech.glide.load.Key interface with the provided implementation.
					 */
					public constructor(implementation: {
						updateDiskCacheKey(param0: javasecurityMessageDigest): void;
						equals(param0: javalangObject): boolean;
						hashCode(): number;
					});
					public static STRING_CHARSET_NAME: string;
					public updateDiskCacheKey(param0: javasecurityMessageDigest): void;
					public equals(param0: javalangObject): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

import javautilCollection = java.util.Collection;
/// <reference path="./com.bumptech.glide.load.Transformation.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class MultiTransformation {
					public constructor(param0: native.Array<com.bumptech.glide.load.Transformation>);
					public getId(): string;
					public transform(param0: com.bumptech.glide.load.engine.Resource, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
					public constructor(param0: javautilCollection);
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class ResourceDecoder {
					/**
					 * Constructs a new instance of the com.bumptech.glide.load.ResourceDecoder interface with the provided implementation.
					 */
					public constructor(implementation: {
						decode(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
						getId(): string;
					});
					public decode(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
					public getId(): string;
				}
			}
		}
	}
}

/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class ResourceEncoder {
					/**
					 * Constructs a new instance of the com.bumptech.glide.load.ResourceEncoder interface with the provided implementation.
					 */
					public constructor(implementation: {
						encode(param0: javalangObject, param1: javaioOutputStream): boolean;
						getId(): string;
					});
					public getId(): string;
					public encode(param0: javalangObject, param1: javaioOutputStream): boolean;
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class Transformation {
					/**
					 * Constructs a new instance of the com.bumptech.glide.load.Transformation interface with the provided implementation.
					 */
					public constructor(implementation: {
						transform(param0: com.bumptech.glide.load.engine.Resource, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
						getId(): string;
					});
					public getId(): string;
					public transform(param0: com.bumptech.glide.load.engine.Resource, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
				}
			}
		}
	}
}

import androidcontentresAssetManager = android.content.res.AssetManager;
/// <reference path="./android.content.res.AssetManager.d.ts" />
/// <reference path="./com.bumptech.glide.Priority.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export abstract class AssetPathFetcher {
						public cancel(): void;
						public loadResource(param0: androidcontentresAssetManager, param1: string): javalangObject;
						public constructor(param0: androidcontentresAssetManager, param1: string);
						public cleanup(): void;
						public getId(): string;
						public close(param0: javalangObject): void;
						public loadData(param0: com.bumptech.glide.Priority): javalangObject;
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.Priority.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class ByteArrayFetcher {
						public constructor(param0: native.Array<number>, param1: string);
						public cancel(): void;
						public loadData(param0: com.bumptech.glide.Priority): javaioInputStream;
						public cleanup(): void;
						public getId(): string;
						public loadData(param0: com.bumptech.glide.Priority): javalangObject;
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.Priority.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class DataFetcher {
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.data.DataFetcher interface with the provided implementation.
						 */
						public constructor(implementation: {
							loadData(param0: com.bumptech.glide.Priority): javalangObject;
							cleanup(): void;
							getId(): string;
							cancel(): void;
						});
						public cancel(): void;
						public cleanup(): void;
						public getId(): string;
						public loadData(param0: com.bumptech.glide.Priority): javalangObject;
					}
				}
			}
		}
	}
}

/// <reference path="./java.io.InputStream.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class ExifOrientationStream {
						public read(): number;
						public skip(param0: number): number;
						public markSupported(): boolean;
						public mark(param0: number): void;
						public constructor(param0: javaioInputStream, param1: number);
						public read(param0: native.Array<number>, param1: number, param2: number): number;
						public reset(): void;
					}
				}
			}
		}
	}
}

import androidosParcelFileDescriptor = android.os.ParcelFileDescriptor;
/// <reference path="./android.content.res.AssetManager.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./com.bumptech.glide.Priority.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class FileDescriptorAssetPathFetcher extends com.bumptech.glide.load.data.AssetPathFetcher {
						public cancel(): void;
						public loadResource(param0: androidcontentresAssetManager, param1: string): javalangObject;
						public constructor(param0: androidcontentresAssetManager, param1: string);
						public cleanup(): void;
						public getId(): string;
						public close(param0: javalangObject): void;
						public loadResource(param0: androidcontentresAssetManager, param1: string): androidosParcelFileDescriptor;
						public close(param0: androidosParcelFileDescriptor): void;
						public loadData(param0: com.bumptech.glide.Priority): javalangObject;
					}
				}
			}
		}
	}
}

import androidcontentContentResolver = android.content.ContentResolver;
/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./com.bumptech.glide.Priority.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class FileDescriptorLocalUriFetcher extends com.bumptech.glide.load.data.LocalUriFetcher {
						public loadResource(param0: androidnetUri, param1: androidcontentContentResolver): androidosParcelFileDescriptor;
						public cancel(): void;
						public cleanup(): void;
						public getId(): string;
						public loadResource(param0: androidnetUri, param1: androidcontentContentResolver): javalangObject;
						public close(param0: javalangObject): void;
						public constructor(param0: androidcontentContext, param1: androidnetUri);
						public close(param0: androidosParcelFileDescriptor): void;
						public loadData(param0: com.bumptech.glide.Priority): javalangObject;
					}
				}
			}
		}
	}
}

import javanetHttpURLConnection = java.net.HttpURLConnection;
/// <reference path="./com.bumptech.glide.Priority.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.GlideUrl.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.net.HttpURLConnection.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class HttpUrlFetcher {
						public cancel(): void;
						public constructor(param0: com.bumptech.glide.load.model.GlideUrl);
						public loadData(param0: com.bumptech.glide.Priority): javaioInputStream;
						public cleanup(): void;
						public getId(): string;
						public loadData(param0: com.bumptech.glide.Priority): javalangObject;
					}
					export module HttpUrlFetcher {
						export class DefaultHttpUrlConnectionFactory {
							public build(param0: javanetURL): javanetHttpURLConnection;
						}
						export class HttpUrlConnectionFactory {
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.data.HttpUrlFetcher$HttpUrlConnectionFactory interface with the provided implementation.
							 */
							public constructor(implementation: {
								build(param0: javanetURL): javanetHttpURLConnection;
							});
							public build(param0: javanetURL): javanetHttpURLConnection;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./com.bumptech.glide.Priority.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export abstract class LocalUriFetcher {
						public cancel(): void;
						public cleanup(): void;
						public getId(): string;
						public loadResource(param0: androidnetUri, param1: androidcontentContentResolver): javalangObject;
						public close(param0: javalangObject): void;
						public constructor(param0: androidcontentContext, param1: androidnetUri);
						public loadData(param0: com.bumptech.glide.Priority): javalangObject;
					}
				}
			}
		}
	}
}

import androiddatabaseCursor = android.database.Cursor;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./com.bumptech.glide.Priority.d.ts" />
/// <reference path="./com.bumptech.glide.load.data.DataFetcher.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class MediaStoreThumbFetcher {
						public cancel(): void;
						public loadData(param0: com.bumptech.glide.Priority): javaioInputStream;
						public cleanup(): void;
						public getId(): string;
						public constructor(param0: androidcontentContext, param1: androidnetUri, param2: com.bumptech.glide.load.data.DataFetcher, param3: number, param4: number);
						public loadData(param0: com.bumptech.glide.Priority): javalangObject;
					}
					export module MediaStoreThumbFetcher {
						export class FileService {
							public length(param0: javaioFile): number;
							public exists(param0: javaioFile): boolean;
							public get(param0: string): javaioFile;
						}
						export class ImageThumbnailQuery {
							public queryPath(param0: androidcontentContext, param1: androidnetUri): androiddatabaseCursor;
						}
						export class ThumbnailQuery {
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.data.MediaStoreThumbFetcher$ThumbnailQuery interface with the provided implementation.
							 */
							public constructor(implementation: {
								queryPath(param0: androidcontentContext, param1: androidnetUri): androiddatabaseCursor;
							});
							public queryPath(param0: androidcontentContext, param1: androidnetUri): androiddatabaseCursor;
						}
						export class ThumbnailStreamOpener {
							public getOrientation(param0: androidcontentContext, param1: androidnetUri): number;
							public constructor(param0: com.bumptech.glide.load.data.MediaStoreThumbFetcher.ThumbnailQuery);
							public open(param0: androidcontentContext, param1: androidnetUri): javaioInputStream;
							public constructor(param0: com.bumptech.glide.load.data.MediaStoreThumbFetcher.FileService, param1: com.bumptech.glide.load.data.MediaStoreThumbFetcher.ThumbnailQuery);
						}
						export class ThumbnailStreamOpenerFactory {
							public build(param0: androidnetUri, param1: number, param2: number): com.bumptech.glide.load.data.MediaStoreThumbFetcher.ThumbnailStreamOpener;
						}
						export class VideoThumbnailQuery {
							public queryPath(param0: androidcontentContext, param1: androidnetUri): androiddatabaseCursor;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.res.AssetManager.d.ts" />
/// <reference path="./com.bumptech.glide.Priority.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class StreamAssetPathFetcher extends com.bumptech.glide.load.data.AssetPathFetcher {
						public close(param0: javaioInputStream): void;
						public cancel(): void;
						public loadResource(param0: androidcontentresAssetManager, param1: string): javaioInputStream;
						public loadResource(param0: androidcontentresAssetManager, param1: string): javalangObject;
						public constructor(param0: androidcontentresAssetManager, param1: string);
						public cleanup(): void;
						public getId(): string;
						public close(param0: javalangObject): void;
						public loadData(param0: com.bumptech.glide.Priority): javalangObject;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./com.bumptech.glide.Priority.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class StreamLocalUriFetcher extends com.bumptech.glide.load.data.LocalUriFetcher {
						public close(param0: javaioInputStream): void;
						public cancel(): void;
						public cleanup(): void;
						public getId(): string;
						public loadResource(param0: androidnetUri, param1: androidcontentContentResolver): javalangObject;
						public loadResource(param0: androidnetUri, param1: androidcontentContentResolver): javaioInputStream;
						public close(param0: javalangObject): void;
						public constructor(param0: androidcontentContext, param1: androidnetUri);
						public loadData(param0: com.bumptech.glide.Priority): javalangObject;
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.Key.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceDecoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.cache.DiskCache.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class CacheLoader {
						public load(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.ResourceDecoder, param2: number, param3: number): com.bumptech.glide.load.engine.Resource;
						public constructor(param0: com.bumptech.glide.load.engine.cache.DiskCache);
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.Priority.d.ts" />
/// <reference path="./com.bumptech.glide.load.Encoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.Transformation.d.ts" />
/// <reference path="./com.bumptech.glide.load.data.DataFetcher.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.DecodeJob.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.DiskCacheStrategy.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.EngineKey.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.cache.DiskCache.d.ts" />
/// <reference path="./com.bumptech.glide.load.resource.transcode.ResourceTranscoder.d.ts" />
/// <reference path="./com.bumptech.glide.provider.DataLoadProvider.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class DecodeJob {
						public constructor(param0: com.bumptech.glide.load.engine.EngineKey, param1: number, param2: number, param3: com.bumptech.glide.load.data.DataFetcher, param4: com.bumptech.glide.provider.DataLoadProvider, param5: com.bumptech.glide.load.Transformation, param6: com.bumptech.glide.load.resource.transcode.ResourceTranscoder, param7: com.bumptech.glide.load.engine.DecodeJob.DiskCacheProvider, param8: com.bumptech.glide.load.engine.DiskCacheStrategy, param9: com.bumptech.glide.Priority);
						public decodeFromSource(): com.bumptech.glide.load.engine.Resource;
						public cancel(): void;
						public decodeSourceFromCache(): com.bumptech.glide.load.engine.Resource;
						public decodeResultFromCache(): com.bumptech.glide.load.engine.Resource;
					}
					export module DecodeJob {
						export class DiskCacheProvider {
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.DecodeJob$DiskCacheProvider interface with the provided implementation.
							 */
							public constructor(implementation: {
								getDiskCache(): com.bumptech.glide.load.engine.cache.DiskCache;
							});
							public getDiskCache(): com.bumptech.glide.load.engine.cache.DiskCache;
						}
						export class FileOpener {
							public open(param0: javaioFile): javaioOutputStream;
						}
						export class SourceWriter {
							public constructor(param0: com.bumptech.glide.load.engine.DecodeJob, param1: com.bumptech.glide.load.Encoder, param2: javalangObject);
							public write(param0: javaioFile): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class DiskCacheStrategy {
						public static ALL: com.bumptech.glide.load.engine.DiskCacheStrategy;
						public static NONE: com.bumptech.glide.load.engine.DiskCacheStrategy;
						public static SOURCE: com.bumptech.glide.load.engine.DiskCacheStrategy;
						public static RESULT: com.bumptech.glide.load.engine.DiskCacheStrategy;
						public cacheResult(): boolean;
						public static values(): native.Array<com.bumptech.glide.load.engine.DiskCacheStrategy>;
						public static valueOf(param0: string): com.bumptech.glide.load.engine.DiskCacheStrategy;
						public cacheSource(): boolean;
					}
				}
			}
		}
	}
}

import javautilMap = java.util.Map;
import javalangrefReferenceQueue = java.lang.ref.ReferenceQueue;
/// <reference path="./com.bumptech.glide.Priority.d.ts" />
/// <reference path="./com.bumptech.glide.load.Key.d.ts" />
/// <reference path="./com.bumptech.glide.load.Transformation.d.ts" />
/// <reference path="./com.bumptech.glide.load.data.DataFetcher.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.DiskCacheStrategy.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.EngineJob.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.EngineJobListener.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.EngineResource.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.cache.DiskCache.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.cache.MemoryCache.d.ts" />
/// <reference path="./com.bumptech.glide.load.resource.transcode.ResourceTranscoder.d.ts" />
/// <reference path="./com.bumptech.glide.provider.DataLoadProvider.d.ts" />
/// <reference path="./com.bumptech.glide.request.ResourceCallback.d.ts" />
/// <reference path="./java.lang.ref.ReferenceQueue.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.concurrent.ExecutorService.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class Engine {
						public clearDiskCache(): void;
						public onEngineJobCancelled(param0: com.bumptech.glide.load.engine.EngineJob, param1: com.bumptech.glide.load.Key): void;
						public release(param0: com.bumptech.glide.load.engine.Resource): void;
						public onEngineJobComplete(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.EngineResource): void;
						public onResourceRemoved(param0: com.bumptech.glide.load.engine.Resource): void;
						public load(param0: com.bumptech.glide.load.Key, param1: number, param2: number, param3: com.bumptech.glide.load.data.DataFetcher, param4: com.bumptech.glide.provider.DataLoadProvider, param5: com.bumptech.glide.load.Transformation, param6: com.bumptech.glide.load.resource.transcode.ResourceTranscoder, param7: com.bumptech.glide.Priority, param8: boolean, param9: com.bumptech.glide.load.engine.DiskCacheStrategy, param10: com.bumptech.glide.request.ResourceCallback): com.bumptech.glide.load.engine.Engine.LoadStatus;
						public constructor(param0: com.bumptech.glide.load.engine.cache.MemoryCache, param1: com.bumptech.glide.load.engine.cache.DiskCache.Factory, param2: javautilconcurrentExecutorService, param3: javautilconcurrentExecutorService);
						public onResourceReleased(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.EngineResource): void;
					}
					export module Engine {
						export class EngineJobFactory {
							public build(param0: com.bumptech.glide.load.Key, param1: boolean): com.bumptech.glide.load.engine.EngineJob;
							public constructor(param0: javautilconcurrentExecutorService, param1: javautilconcurrentExecutorService, param2: com.bumptech.glide.load.engine.EngineJobListener);
						}
						export class LazyDiskCacheProvider {
							public constructor(param0: com.bumptech.glide.load.engine.cache.DiskCache.Factory);
							public getDiskCache(): com.bumptech.glide.load.engine.cache.DiskCache;
						}
						export class LoadStatus {
							public cancel(): void;
							public constructor(param0: com.bumptech.glide.request.ResourceCallback, param1: com.bumptech.glide.load.engine.EngineJob);
						}
						export class RefQueueIdleHandler {
							public constructor(param0: javautilMap, param1: javalangrefReferenceQueue);
							public queueIdle(): boolean;
						}
						export class ResourceWeakReference {
							public constructor(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.EngineResource, param2: javalangrefReferenceQueue);
						}
					}
				}
			}
		}
	}
}

import androidosMessage = android.os.Message;
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./com.bumptech.glide.load.Key.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.EngineJobListener.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.EngineResource.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.EngineRunnable.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./com.bumptech.glide.request.ResourceCallback.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.util.concurrent.ExecutorService.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class EngineJob {
						public constructor(param0: com.bumptech.glide.load.Key, param1: javautilconcurrentExecutorService, param2: javautilconcurrentExecutorService, param3: boolean, param4: com.bumptech.glide.load.engine.EngineJobListener, param5: com.bumptech.glide.load.engine.EngineJob.EngineResourceFactory);
						public onResourceReady(param0: com.bumptech.glide.load.engine.Resource): void;
						public onException(param0: javalangException): void;
						public submitForSource(param0: com.bumptech.glide.load.engine.EngineRunnable): void;
						public removeCallback(param0: com.bumptech.glide.request.ResourceCallback): void;
						public constructor(param0: com.bumptech.glide.load.Key, param1: javautilconcurrentExecutorService, param2: javautilconcurrentExecutorService, param3: boolean, param4: com.bumptech.glide.load.engine.EngineJobListener);
						public addCallback(param0: com.bumptech.glide.request.ResourceCallback): void;
						public start(param0: com.bumptech.glide.load.engine.EngineRunnable): void;
					}
					export module EngineJob {
						export class EngineResourceFactory {
							public build(param0: com.bumptech.glide.load.engine.Resource, param1: boolean): com.bumptech.glide.load.engine.EngineResource;
						}
						export class MainThreadCallback {
							public handleMessage(param0: androidosMessage): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.Key.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.EngineJob.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.EngineResource.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class EngineJobListener {
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.engine.EngineJobListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onEngineJobComplete(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.EngineResource): void;
							onEngineJobCancelled(param0: com.bumptech.glide.load.engine.EngineJob, param1: com.bumptech.glide.load.Key): void;
						});
						public onEngineJobCancelled(param0: com.bumptech.glide.load.engine.EngineJob, param1: com.bumptech.glide.load.Key): void;
						public onEngineJobComplete(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.EngineResource): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.Encoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.Key.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceDecoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceEncoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.Transformation.d.ts" />
/// <reference path="./com.bumptech.glide.load.resource.transcode.ResourceTranscoder.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.MessageDigest.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class EngineKey {
						public equals(param0: javalangObject): boolean;
						public constructor(param0: string, param1: com.bumptech.glide.load.Key, param2: number, param3: number, param4: com.bumptech.glide.load.ResourceDecoder, param5: com.bumptech.glide.load.ResourceDecoder, param6: com.bumptech.glide.load.Transformation, param7: com.bumptech.glide.load.ResourceEncoder, param8: com.bumptech.glide.load.resource.transcode.ResourceTranscoder, param9: com.bumptech.glide.load.Encoder);
						public updateDiskCacheKey(param0: javasecurityMessageDigest): void;
						public getOriginalKey(): com.bumptech.glide.load.Key;
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.Encoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.Key.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceDecoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceEncoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.Transformation.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.EngineKey.d.ts" />
/// <reference path="./com.bumptech.glide.load.resource.transcode.ResourceTranscoder.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class EngineKeyFactory {
						public buildKey(param0: string, param1: com.bumptech.glide.load.Key, param2: number, param3: number, param4: com.bumptech.glide.load.ResourceDecoder, param5: com.bumptech.glide.load.ResourceDecoder, param6: com.bumptech.glide.load.Transformation, param7: com.bumptech.glide.load.ResourceEncoder, param8: com.bumptech.glide.load.resource.transcode.ResourceTranscoder, param9: com.bumptech.glide.load.Encoder): com.bumptech.glide.load.engine.EngineKey;
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.Key.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.EngineResource.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class EngineResource {
						public getSize(): number;
						public recycle(): void;
						public get(): javalangObject;
					}
					export module EngineResource {
						export class ResourceListener {
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.EngineResource$ResourceListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onResourceReleased(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.EngineResource): void;
							});
							public onResourceReleased(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.EngineResource): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.Priority.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.DecodeJob.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.EngineRunnable.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class EngineRunnable {
						public constructor(param0: com.bumptech.glide.load.engine.EngineRunnable.EngineRunnableManager, param1: com.bumptech.glide.load.engine.DecodeJob, param2: com.bumptech.glide.Priority);
						public run(): void;
						public cancel(): void;
						public getPriority(): number;
					}
					export module EngineRunnable {
						export class EngineRunnableManager {
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.EngineRunnable$EngineRunnableManager interface with the provided implementation.
							 */
							public constructor(implementation: {
								submitForSource(param0: com.bumptech.glide.load.engine.EngineRunnable): void;
								onResourceReady(param0: com.bumptech.glide.load.engine.Resource): void;
								onException(param0: javalangException): void;
							});
							public onResourceReady(param0: com.bumptech.glide.load.engine.Resource): void;
							public onException(param0: javalangException): void;
							public submitForSource(param0: com.bumptech.glide.load.engine.EngineRunnable): void;
						}
						export class Stage {
							public static CACHE: com.bumptech.glide.load.engine.EngineRunnable.Stage;
							public static SOURCE: com.bumptech.glide.load.engine.EngineRunnable.Stage;
							public static values(): native.Array<com.bumptech.glide.load.engine.EngineRunnable.Stage>;
							public static valueOf(param0: string): com.bumptech.glide.load.engine.EngineRunnable.Stage;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.Key.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.MessageDigest.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class OriginalKey {
						public equals(param0: javalangObject): boolean;
						public updateDiskCacheKey(param0: javasecurityMessageDigest): void;
						public constructor(param0: string, param1: com.bumptech.glide.load.Key);
						public hashCode(): number;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class Resource {
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.engine.Resource interface with the provided implementation.
						 */
						public constructor(implementation: {
							get(): javalangObject;
							getSize(): number;
							recycle(): void;
						});
						public getSize(): number;
						public recycle(): void;
						public get(): javalangObject;
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class ResourceRecycler {
						public recycle(param0: com.bumptech.glide.load.engine.Resource): void;
					}
					export module ResourceRecycler {
						export class ResourceRecyclerCallback {
							public static RECYCLE_RESOURCE: number;
							public handleMessage(param0: androidosMessage): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.Poolable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class AttributeStrategy {
							public get(param0: number, param1: number, param2: androidgraphicsBitmapConfig): androidgraphicsBitmap;
							public put(param0: androidgraphicsBitmap): void;
							public logBitmap(param0: androidgraphicsBitmap): string;
							public getSize(param0: androidgraphicsBitmap): number;
							public removeLast(): androidgraphicsBitmap;
							public logBitmap(param0: number, param1: number, param2: androidgraphicsBitmapConfig): string;
							public toString(): string;
						}
						export module AttributeStrategy {
							export class Key {
								public equals(param0: javalangObject): boolean;
								public toString(): string;
								public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.AttributeStrategy.KeyPool);
								public init(param0: number, param1: number, param2: androidgraphicsBitmapConfig): void;
								public offer(): void;
								public hashCode(): number;
							}
							export class KeyPool extends com.bumptech.glide.load.engine.bitmap_recycle.BaseKeyPool {
								public get(param0: number, param1: number, param2: androidgraphicsBitmapConfig): com.bumptech.glide.load.engine.bitmap_recycle.AttributeStrategy.Key;
								public create(): com.bumptech.glide.load.engine.bitmap_recycle.AttributeStrategy.Key;
								public create(): com.bumptech.glide.load.engine.bitmap_recycle.Poolable;
								public get(): com.bumptech.glide.load.engine.bitmap_recycle.Poolable;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.Poolable.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export abstract class BaseKeyPool {
							public offer(param0: com.bumptech.glide.load.engine.bitmap_recycle.Poolable): void;
							public get(): com.bumptech.glide.load.engine.bitmap_recycle.Poolable;
							public create(): com.bumptech.glide.load.engine.bitmap_recycle.Poolable;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class BitmapPool {
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool interface with the provided implementation.
							 */
							public constructor(implementation: {
								getMaxSize(): number;
								setSizeMultiplier(param0: number): void;
								put(param0: androidgraphicsBitmap): boolean;
								get(param0: number, param1: number, param2: androidgraphicsBitmapConfig): androidgraphicsBitmap;
								getDirty(param0: number, param1: number, param2: androidgraphicsBitmapConfig): androidgraphicsBitmap;
								clearMemory(): void;
								trimMemory(param0: number): void;
							});
							public get(param0: number, param1: number, param2: androidgraphicsBitmapConfig): androidgraphicsBitmap;
							public put(param0: androidgraphicsBitmap): boolean;
							public getDirty(param0: number, param1: number, param2: androidgraphicsBitmapConfig): androidgraphicsBitmap;
							public clearMemory(): void;
							public setSizeMultiplier(param0: number): void;
							public getMaxSize(): number;
							public trimMemory(param0: number): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class BitmapPoolAdapter {
							public constructor();
							public get(param0: number, param1: number, param2: androidgraphicsBitmapConfig): androidgraphicsBitmap;
							public put(param0: androidgraphicsBitmap): boolean;
							public getDirty(param0: number, param1: number, param2: androidgraphicsBitmapConfig): androidgraphicsBitmap;
							public clearMemory(): void;
							public setSizeMultiplier(param0: number): void;
							public getMaxSize(): number;
							public trimMemory(param0: number): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.Poolable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class GroupedLinkedMap {
							public put(param0: com.bumptech.glide.load.engine.bitmap_recycle.Poolable, param1: javalangObject): void;
							public get(param0: com.bumptech.glide.load.engine.bitmap_recycle.Poolable): javalangObject;
							public toString(): string;
							public removeLast(): javalangObject;
						}
						export module GroupedLinkedMap {
							export class LinkedEntry {
								public size(): number;
								public removeLast(): javalangObject;
								public constructor(param0: javalangObject);
								public add(param0: javalangObject): void;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

import javautilSet = java.util.Set;
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class LruBitmapPool {
							public get(param0: number, param1: number, param2: androidgraphicsBitmapConfig): androidgraphicsBitmap;
							public put(param0: androidgraphicsBitmap): boolean;
							public getDirty(param0: number, param1: number, param2: androidgraphicsBitmapConfig): androidgraphicsBitmap;
							public clearMemory(): void;
							public constructor(param0: number, param1: javautilSet);
							public setSizeMultiplier(param0: number): void;
							public constructor(param0: number);
							public getMaxSize(): number;
							public trimMemory(param0: number): void;
						}
						export module LruBitmapPool {
							export class BitmapTracker {
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.engine.bitmap_recycle.LruBitmapPool$BitmapTracker interface with the provided implementation.
								 */
								public constructor(implementation: {
									add(param0: androidgraphicsBitmap): void;
									remove(param0: androidgraphicsBitmap): void;
								});
								public remove(param0: androidgraphicsBitmap): void;
								public add(param0: androidgraphicsBitmap): void;
							}
							export class NullBitmapTracker {
								public remove(param0: androidgraphicsBitmap): void;
								public add(param0: androidgraphicsBitmap): void;
							}
							export class ThrowingBitmapTracker {
								public remove(param0: androidgraphicsBitmap): void;
								public add(param0: androidgraphicsBitmap): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class LruPoolStrategy {
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.bitmap_recycle.LruPoolStrategy interface with the provided implementation.
							 */
							public constructor(implementation: {
								put(param0: androidgraphicsBitmap): void;
								get(param0: number, param1: number, param2: androidgraphicsBitmapConfig): androidgraphicsBitmap;
								removeLast(): androidgraphicsBitmap;
								logBitmap(param0: androidgraphicsBitmap): string;
								logBitmap(param0: number, param1: number, param2: androidgraphicsBitmapConfig): string;
								getSize(param0: androidgraphicsBitmap): number;
							});
							public get(param0: number, param1: number, param2: androidgraphicsBitmapConfig): androidgraphicsBitmap;
							public put(param0: androidgraphicsBitmap): void;
							public logBitmap(param0: androidgraphicsBitmap): string;
							public getSize(param0: androidgraphicsBitmap): number;
							public removeLast(): androidgraphicsBitmap;
							public logBitmap(param0: number, param1: number, param2: androidgraphicsBitmapConfig): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class Poolable {
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.bitmap_recycle.Poolable interface with the provided implementation.
							 */
							public constructor(implementation: {
								offer(): void;
							});
							public offer(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class PrettyPrintTreeMap {
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.Poolable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class SizeConfigStrategy {
							public constructor();
							public get(param0: number, param1: number, param2: androidgraphicsBitmapConfig): androidgraphicsBitmap;
							public put(param0: androidgraphicsBitmap): void;
							public logBitmap(param0: androidgraphicsBitmap): string;
							public getSize(param0: androidgraphicsBitmap): number;
							public removeLast(): androidgraphicsBitmap;
							public logBitmap(param0: number, param1: number, param2: androidgraphicsBitmapConfig): string;
							public toString(): string;
						}
						export module SizeConfigStrategy {
							export class Key {
								public toString(): string;
								public equals(param0: javalangObject): boolean;
								public offer(): void;
								public init(param0: number, param1: androidgraphicsBitmapConfig): void;
								public hashCode(): number;
								public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.SizeConfigStrategy.KeyPool);
							}
							export class KeyPool extends com.bumptech.glide.load.engine.bitmap_recycle.BaseKeyPool {
								public get(param0: number, param1: androidgraphicsBitmapConfig): com.bumptech.glide.load.engine.bitmap_recycle.SizeConfigStrategy.Key;
								public create(): com.bumptech.glide.load.engine.bitmap_recycle.SizeConfigStrategy.Key;
								public create(): com.bumptech.glide.load.engine.bitmap_recycle.Poolable;
								public get(): com.bumptech.glide.load.engine.bitmap_recycle.Poolable;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.Poolable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class SizeStrategy {
							public get(param0: number, param1: number, param2: androidgraphicsBitmapConfig): androidgraphicsBitmap;
							public put(param0: androidgraphicsBitmap): void;
							public logBitmap(param0: androidgraphicsBitmap): string;
							public getSize(param0: androidgraphicsBitmap): number;
							public removeLast(): androidgraphicsBitmap;
							public logBitmap(param0: number, param1: number, param2: androidgraphicsBitmapConfig): string;
							public toString(): string;
						}
						export module SizeStrategy {
							export class Key {
								public equals(param0: javalangObject): boolean;
								public toString(): string;
								public offer(): void;
								public init(param0: number): void;
								public hashCode(): number;
							}
							export class KeyPool extends com.bumptech.glide.load.engine.bitmap_recycle.BaseKeyPool {
								public create(): com.bumptech.glide.load.engine.bitmap_recycle.SizeStrategy.Key;
								public get(param0: number): com.bumptech.glide.load.engine.bitmap_recycle.SizeStrategy.Key;
								public create(): com.bumptech.glide.load.engine.bitmap_recycle.Poolable;
								public get(): com.bumptech.glide.load.engine.bitmap_recycle.Poolable;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.Key.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.cache.DiskCache.d.ts" />
/// <reference path="./java.io.File.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class DiskCache {
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.DiskCache interface with the provided implementation.
							 */
							public constructor(implementation: {
								get(param0: com.bumptech.glide.load.Key): javaioFile;
								put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.cache.DiskCache.Writer): void;
								delete(param0: com.bumptech.glide.load.Key): void;
								clear(): void;
							});
							public get(param0: com.bumptech.glide.load.Key): javaioFile;
							public put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.cache.DiskCache.Writer): void;
							public clear(): void;
							public delete(param0: com.bumptech.glide.load.Key): void;
						}
						export module DiskCache {
							export class Factory {
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.DiskCache$Factory interface with the provided implementation.
								 */
								public constructor(implementation: {
									build(): com.bumptech.glide.load.engine.cache.DiskCache;
								});
								public static DEFAULT_DISK_CACHE_DIR: string;
								public static DEFAULT_DISK_CACHE_SIZE: number;
								public build(): com.bumptech.glide.load.engine.cache.DiskCache;
							}
							export class Writer {
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.DiskCache$Writer interface with the provided implementation.
								 */
								public constructor(implementation: {
									write(param0: javaioFile): boolean;
								});
								public write(param0: javaioFile): boolean;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.Key.d.ts" />
/// <reference path="./java.io.File.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class DiskCacheAdapter {
							public constructor();
							public get(param0: com.bumptech.glide.load.Key): javaioFile;
							public put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.cache.DiskCache.Writer): void;
							public clear(): void;
							public delete(param0: com.bumptech.glide.load.Key): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class DiskCacheWriteLocker {
						}
						export module DiskCacheWriteLocker {
							export class WriteLock {
							}
							export class WriteLockPool {
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.engine.cache.DiskCache.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class DiskLruCacheFactory {
							public constructor(param0: string, param1: string, param2: number);
							public build(): com.bumptech.glide.load.engine.cache.DiskCache;
							public constructor(param0: com.bumptech.glide.load.engine.cache.DiskLruCacheFactory.CacheDirectoryGetter, param1: number);
							public constructor(param0: string, param1: number);
						}
						export module DiskLruCacheFactory {
							export class CacheDirectoryGetter {
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.DiskLruCacheFactory$CacheDirectoryGetter interface with the provided implementation.
								 */
								public constructor(implementation: {
									getCacheDirectory(): javaioFile;
								});
								public getCacheDirectory(): javaioFile;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.Key.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.cache.DiskCache.d.ts" />
/// <reference path="./java.io.File.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class DiskLruCacheWrapper {
							public get(param0: com.bumptech.glide.load.Key): javaioFile;
							public constructor(param0: javaioFile, param1: number);
							public put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.cache.DiskCache.Writer): void;
							public static get(param0: javaioFile, param1: number): com.bumptech.glide.load.engine.cache.DiskCache;
							public clear(): void;
							public delete(param0: com.bumptech.glide.load.Key): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.cache.DiskCache.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class ExternalCacheDiskCacheFactory extends com.bumptech.glide.load.engine.cache.DiskLruCacheFactory {
							public constructor(param0: string, param1: string, param2: number);
							public constructor(param0: androidcontentContext, param1: string, param2: number);
							public build(): com.bumptech.glide.load.engine.cache.DiskCache;
							public constructor(param0: androidcontentContext);
							public constructor(param0: com.bumptech.glide.load.engine.cache.DiskLruCacheFactory.CacheDirectoryGetter, param1: number);
							public constructor(param0: androidcontentContext, param1: number);
							public constructor(param0: string, param1: number);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.cache.DiskCache.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class InternalCacheDiskCacheFactory extends com.bumptech.glide.load.engine.cache.DiskLruCacheFactory {
							public constructor(param0: string, param1: string, param2: number);
							public constructor(param0: androidcontentContext, param1: string, param2: number);
							public build(): com.bumptech.glide.load.engine.cache.DiskCache;
							public constructor(param0: androidcontentContext);
							public constructor(param0: com.bumptech.glide.load.engine.cache.DiskLruCacheFactory.CacheDirectoryGetter, param1: number);
							public constructor(param0: androidcontentContext, param1: number);
							public constructor(param0: string, param1: number);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.Key.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class LruResourceCache extends com.bumptech.glide.util.LruCache implements com.bumptech.glide.load.engine.cache.MemoryCache {
							public getCurrentSize(): number;
							public remove(param0: javalangObject): javalangObject;
							public put(param0: javalangObject, param1: javalangObject): javalangObject;
							public getSize(param0: javalangObject): number;
							public getSize(param0: com.bumptech.glide.load.engine.Resource): number;
							public setSizeMultiplier(param0: number): void;
							public constructor(param0: number);
							public setResourceRemovedListener(param0: com.bumptech.glide.load.engine.cache.MemoryCache.ResourceRemovedListener): void;
							public remove(param0: com.bumptech.glide.load.Key): com.bumptech.glide.load.engine.Resource;
							public put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.Resource): com.bumptech.glide.load.engine.Resource;
							public onItemEvicted(param0: javalangObject, param1: javalangObject): void;
							public clearMemory(): void;
							public onItemEvicted(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.Resource): void;
							public trimMemory(param0: number): void;
							public getMaxSize(): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.Key.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class MemoryCache {
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.MemoryCache interface with the provided implementation.
							 */
							public constructor(implementation: {
								getCurrentSize(): number;
								getMaxSize(): number;
								setSizeMultiplier(param0: number): void;
								remove(param0: com.bumptech.glide.load.Key): com.bumptech.glide.load.engine.Resource;
								put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.Resource): com.bumptech.glide.load.engine.Resource;
								setResourceRemovedListener(param0: com.bumptech.glide.load.engine.cache.MemoryCache.ResourceRemovedListener): void;
								clearMemory(): void;
								trimMemory(param0: number): void;
							});
							public setResourceRemovedListener(param0: com.bumptech.glide.load.engine.cache.MemoryCache.ResourceRemovedListener): void;
							public getCurrentSize(): number;
							public remove(param0: com.bumptech.glide.load.Key): com.bumptech.glide.load.engine.Resource;
							public put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.Resource): com.bumptech.glide.load.engine.Resource;
							public clearMemory(): void;
							public setSizeMultiplier(param0: number): void;
							public getMaxSize(): number;
							public trimMemory(param0: number): void;
						}
						export module MemoryCache {
							export class ResourceRemovedListener {
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.MemoryCache$ResourceRemovedListener interface with the provided implementation.
								 */
								public constructor(implementation: {
									onResourceRemoved(param0: com.bumptech.glide.load.engine.Resource): void;
								});
								public onResourceRemoved(param0: com.bumptech.glide.load.engine.Resource): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.Key.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class MemoryCacheAdapter {
							public constructor();
							public setResourceRemovedListener(param0: com.bumptech.glide.load.engine.cache.MemoryCache.ResourceRemovedListener): void;
							public getCurrentSize(): number;
							public remove(param0: com.bumptech.glide.load.Key): com.bumptech.glide.load.engine.Resource;
							public put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.Resource): com.bumptech.glide.load.engine.Resource;
							public clearMemory(): void;
							public setSizeMultiplier(param0: number): void;
							public getMaxSize(): number;
							public trimMemory(param0: number): void;
						}
					}
				}
			}
		}
	}
}

import androidutilDisplayMetrics = android.util.DisplayMetrics;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.DisplayMetrics.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class MemorySizeCalculator {
							public getMemoryCacheSize(): number;
							public constructor(param0: androidcontentContext);
							public getBitmapPoolSize(): number;
						}
						export module MemorySizeCalculator {
							export class DisplayMetricsScreenDimensions {
								public constructor(param0: androidutilDisplayMetrics);
								public getWidthPixels(): number;
								public getHeightPixels(): number;
							}
							export class ScreenDimensions {
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.MemorySizeCalculator$ScreenDimensions interface with the provided implementation.
								 */
								public constructor(implementation: {
									getWidthPixels(): number;
									getHeightPixels(): number;
								});
								public getWidthPixels(): number;
								public getHeightPixels(): number;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.Key.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class SafeKeyGenerator {
							public getSafeKey(param0: com.bumptech.glide.load.Key): string;
						}
					}
				}
			}
		}
	}
}

import javautilconcurrentTimeUnit = java.util.concurrent.TimeUnit;
import javautilconcurrentThreadFactory = java.util.concurrent.ThreadFactory;
import javalangRunnable = java.lang.Runnable;
import javautilconcurrentRunnableFuture = java.util.concurrent.RunnableFuture;
import javalangThrowable = java.lang.Throwable;
import javalangThread = java.lang.Thread;
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Thread.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.concurrent.RunnableFuture.d.ts" />
/// <reference path="./java.util.concurrent.ThreadFactory.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module executor {
						export class FifoPriorityThreadPoolExecutor {
							public constructor(param0: number, param1: number, param2: number, param3: javautilconcurrentTimeUnit, param4: javautilconcurrentThreadFactory, param5: com.bumptech.glide.load.engine.executor.FifoPriorityThreadPoolExecutor.UncaughtThrowableStrategy);
							public newTaskFor(param0: javalangRunnable, param1: javalangObject): javautilconcurrentRunnableFuture;
							public afterExecute(param0: javalangRunnable, param1: javalangThrowable): void;
							public constructor(param0: number, param1: com.bumptech.glide.load.engine.executor.FifoPriorityThreadPoolExecutor.UncaughtThrowableStrategy);
							public constructor(param0: number);
						}
						export module FifoPriorityThreadPoolExecutor {
							export class DefaultThreadFactory {
								public constructor();
								public newThread(param0: javalangRunnable): javalangThread;
							}
							export class LoadTask {
								public equals(param0: javalangObject): boolean;
								public compareTo(param0: com.bumptech.glide.load.engine.executor.FifoPriorityThreadPoolExecutor.LoadTask): number;
								public hashCode(): number;
								public constructor(param0: javalangRunnable, param1: javalangObject, param2: number);
							}
							export class UncaughtThrowableStrategy {
								public static IGNORE: com.bumptech.glide.load.engine.executor.FifoPriorityThreadPoolExecutor.UncaughtThrowableStrategy;
								public static LOG: com.bumptech.glide.load.engine.executor.FifoPriorityThreadPoolExecutor.UncaughtThrowableStrategy;
								public static THROW: com.bumptech.glide.load.engine.executor.FifoPriorityThreadPoolExecutor.UncaughtThrowableStrategy;
								public static values(): native.Array<com.bumptech.glide.load.engine.executor.FifoPriorityThreadPoolExecutor.UncaughtThrowableStrategy>;
								public static valueOf(param0: string): com.bumptech.glide.load.engine.executor.FifoPriorityThreadPoolExecutor.UncaughtThrowableStrategy;
								public handle(param0: javalangThrowable): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module executor {
						export class Prioritized {
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.executor.Prioritized interface with the provided implementation.
							 */
							public constructor(implementation: {
								getPriority(): number;
							});
							public getPriority(): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.cache.MemoryCache.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.prefill.PreFillQueue.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.security.MessageDigest.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module prefill {
						export class BitmapPreFillRunner {
							public cancel(): void;
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: com.bumptech.glide.load.engine.cache.MemoryCache, param2: com.bumptech.glide.load.engine.prefill.PreFillQueue);
							public run(): void;
						}
						export module BitmapPreFillRunner {
							export class Clock {
								public now(): number;
							}
							export class UniqueKey {
								public equals(param0: javalangObject): boolean;
								public hashCode(): number;
								public updateDiskCacheKey(param0: javasecurityMessageDigest): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.DecodeFormat.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.cache.MemoryCache.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module prefill {
						export class BitmapPreFiller {
							public constructor(param0: com.bumptech.glide.load.engine.cache.MemoryCache, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: com.bumptech.glide.load.DecodeFormat);
							public preFill(param0: native.Array<com.bumptech.glide.load.engine.prefill.PreFillType.Builder>): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.engine.prefill.PreFillType.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module prefill {
						export class PreFillQueue {
							public remove(): com.bumptech.glide.load.engine.prefill.PreFillType;
							public getSize(): number;
							public constructor(param0: javautilMap);
							public isEmpty(): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module prefill {
						export class PreFillType {
							public hashCode(): number;
							public toString(): string;
							public equals(param0: javalangObject): boolean;
						}
						export module PreFillType {
							export class Builder {
								public constructor(param0: number);
								public constructor(param0: number, param1: number);
								public setConfig(param0: androidgraphicsBitmapConfig): com.bumptech.glide.load.engine.prefill.PreFillType.Builder;
								public setWeight(param0: number): com.bumptech.glide.load.engine.prefill.PreFillType.Builder;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.net.Uri.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class AssetUriParser {
						public static isAssetUri(param0: androidnetUri): boolean;
						public static toAssetPath(param0: androidnetUri): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.data.DataFetcher.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ModelLoader.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class FileLoader {
						public constructor(param0: com.bumptech.glide.load.model.ModelLoader);
						public getResourceFetcher(param0: javaioFile, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						public getResourceFetcher(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ModelLoader.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ModelLoaderFactory.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class GenericLoaderFactory {
						public buildModelLoader(param0: javalangClass, param1: javalangClass): com.bumptech.glide.load.model.ModelLoader;
						public buildModelLoader(param0: javalangClass, param1: javalangClass, param2: androidcontentContext): com.bumptech.glide.load.model.ModelLoader;
						public unregister(param0: javalangClass, param1: javalangClass): com.bumptech.glide.load.model.ModelLoaderFactory;
						public constructor(param0: androidcontentContext);
						public register(param0: javalangClass, param1: javalangClass, param2: com.bumptech.glide.load.model.ModelLoaderFactory): com.bumptech.glide.load.model.ModelLoaderFactory;
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.model.Headers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class GlideUrl {
						public constructor(param0: javanetURL);
						public toURL(): javanetURL;
						public equals(param0: javalangObject): boolean;
						public getCacheKey(): string;
						public toStringUrl(): string;
						public constructor(param0: string, param1: com.bumptech.glide.load.model.Headers);
						public hashCode(): number;
						public constructor(param0: javanetURL, param1: com.bumptech.glide.load.model.Headers);
						public toString(): string;
						public constructor(param0: string);
						public getHeaders(): javautilMap;
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class Headers {
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.model.Headers interface with the provided implementation.
						 */
						public constructor(implementation: {
							getHeaders(): javautilMap;
							<clinit>(): void;
						});
						public static DEFAULT: com.bumptech.glide.load.model.Headers;
						public static NONE: com.bumptech.glide.load.model.Headers;
						public getHeaders(): javautilMap;
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.Priority.d.ts" />
/// <reference path="./com.bumptech.glide.load.data.DataFetcher.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ImageVideoWrapper.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ModelLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class ImageVideoModelLoader {
						public constructor(param0: com.bumptech.glide.load.model.ModelLoader, param1: com.bumptech.glide.load.model.ModelLoader);
						public getResourceFetcher(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
					}
					export module ImageVideoModelLoader {
						export class ImageVideoFetcher {
							public cancel(): void;
							public cleanup(): void;
							public getId(): string;
							public constructor(param0: com.bumptech.glide.load.data.DataFetcher, param1: com.bumptech.glide.load.data.DataFetcher);
							public loadData(param0: com.bumptech.glide.Priority): javalangObject;
							public loadData(param0: com.bumptech.glide.Priority): com.bumptech.glide.load.model.ImageVideoWrapper;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class ImageVideoWrapper {
						public constructor(param0: javaioInputStream, param1: androidosParcelFileDescriptor);
						public getFileDescriptor(): androidosParcelFileDescriptor;
						public getStream(): javaioInputStream;
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.Encoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ImageVideoWrapper.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class ImageVideoWrapperEncoder {
						public encode(param0: javalangObject, param1: javaioOutputStream): boolean;
						public constructor(param0: com.bumptech.glide.load.Encoder, param1: com.bumptech.glide.load.Encoder);
						public getId(): string;
						public encode(param0: com.bumptech.glide.load.model.ImageVideoWrapper, param1: javaioOutputStream): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class LazyHeaderFactory {
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.model.LazyHeaderFactory interface with the provided implementation.
						 */
						public constructor(implementation: {
							buildHeader(): string;
						});
						public buildHeader(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.model.LazyHeaderFactory.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.LazyHeaders.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class LazyHeaders {
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
						public toString(): string;
						public getHeaders(): javautilMap;
					}
					export module LazyHeaders {
						export class Builder {
							public constructor();
							public setHeader(param0: string, param1: com.bumptech.glide.load.model.LazyHeaderFactory): com.bumptech.glide.load.model.LazyHeaders.Builder;
							public setHeader(param0: string, param1: string): com.bumptech.glide.load.model.LazyHeaders.Builder;
							public addHeader(param0: string, param1: com.bumptech.glide.load.model.LazyHeaderFactory): com.bumptech.glide.load.model.LazyHeaders.Builder;
							public build(): com.bumptech.glide.load.model.LazyHeaders;
							public addHeader(param0: string, param1: string): com.bumptech.glide.load.model.LazyHeaders.Builder;
						}
						export class StringHeaderFactory {
							public hashCode(): number;
							public toString(): string;
							public buildHeader(): string;
							public equals(param0: javalangObject): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class ModelCache {
						public constructor();
						public get(param0: javalangObject, param1: number, param2: number): javalangObject;
						public constructor(param0: number);
						public put(param0: javalangObject, param1: number, param2: number, param3: javalangObject): void;
					}
					export module ModelCache {
						export class ModelKey {
							public hashCode(): number;
							public release(): void;
							public equals(param0: javalangObject): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.data.DataFetcher.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class ModelLoader {
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.model.ModelLoader interface with the provided implementation.
						 */
						public constructor(implementation: {
							getResourceFetcher(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						});
						public getResourceFetcher(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.GenericLoaderFactory.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ModelLoader.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class ModelLoaderFactory {
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.model.ModelLoaderFactory interface with the provided implementation.
						 */
						public constructor(implementation: {
							build(param0: androidcontentContext, param1: com.bumptech.glide.load.model.GenericLoaderFactory): com.bumptech.glide.load.model.ModelLoader;
							teardown(): void;
						});
						public build(param0: androidcontentContext, param1: com.bumptech.glide.load.model.GenericLoaderFactory): com.bumptech.glide.load.model.ModelLoader;
						public teardown(): void;
					}
				}
			}
		}
	}
}

import androidcontentresResources = android.content.res.Resources;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./com.bumptech.glide.load.data.DataFetcher.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ModelLoader.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class ResourceLoader {
						public constructor(param0: androidcontentContext, param1: com.bumptech.glide.load.model.ModelLoader);
						public getResourceFetcher(param0: javalangInteger, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						public getResourceFetcher(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						public constructor(param0: androidcontentresResources, param1: com.bumptech.glide.load.model.ModelLoader);
					}
				}
			}
		}
	}
}

/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class StreamEncoder {
						public constructor();
						public encode(param0: javaioInputStream, param1: javaioOutputStream): boolean;
						public encode(param0: javalangObject, param1: javaioOutputStream): boolean;
						public getId(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.data.DataFetcher.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ModelLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class StringLoader {
						public getResourceFetcher(param0: string, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						public constructor(param0: com.bumptech.glide.load.model.ModelLoader);
						public getResourceFetcher(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./com.bumptech.glide.load.data.DataFetcher.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ModelLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export abstract class UriLoader {
						public constructor(param0: androidcontentContext, param1: com.bumptech.glide.load.model.ModelLoader);
						public getAssetPathFetcher(param0: androidcontentContext, param1: string): com.bumptech.glide.load.data.DataFetcher;
						public getLocalUriFetcher(param0: androidcontentContext, param1: androidnetUri): com.bumptech.glide.load.data.DataFetcher;
						public getResourceFetcher(param0: androidnetUri, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						public getResourceFetcher(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.data.DataFetcher.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ModelLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class UrlLoader {
						public getResourceFetcher(param0: javanetURL, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						public constructor(param0: com.bumptech.glide.load.model.ModelLoader);
						public getResourceFetcher(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.bumptech.glide.load.data.DataFetcher.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.GenericLoaderFactory.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ModelLoader.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module file_descriptor {
						export class FileDescriptorFileLoader extends com.bumptech.glide.load.model.FileLoader implements com.bumptech.glide.load.model.file_descriptor.FileDescriptorModelLoader {
							public getResourceFetcher(param0: javaioFile, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							public constructor(param0: androidcontentContext);
							public getResourceFetcher(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							public constructor(param0: com.bumptech.glide.load.model.ModelLoader);
						}
						export module FileDescriptorFileLoader {
							export class Factory {
								public build(param0: androidcontentContext, param1: com.bumptech.glide.load.model.GenericLoaderFactory): com.bumptech.glide.load.model.ModelLoader;
								public teardown(): void;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.data.DataFetcher.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module file_descriptor {
						export class FileDescriptorModelLoader {
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.model.file_descriptor.FileDescriptorModelLoader interface with the provided implementation.
							 */
							public constructor(implementation: {
								getResourceFetcher(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							});
							public getResourceFetcher(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./com.bumptech.glide.load.data.DataFetcher.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.GenericLoaderFactory.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ModelLoader.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module file_descriptor {
						export class FileDescriptorResourceLoader extends com.bumptech.glide.load.model.ResourceLoader implements com.bumptech.glide.load.model.file_descriptor.FileDescriptorModelLoader {
							public constructor(param0: androidcontentresResources, param1: com.bumptech.glide.load.model.ModelLoader);
							public getResourceFetcher(param0: javalangInteger, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							public constructor(param0: androidcontentContext);
							public constructor(param0: androidcontentContext, param1: com.bumptech.glide.load.model.ModelLoader);
							public getResourceFetcher(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						}
						export module FileDescriptorResourceLoader {
							export class Factory {
								public build(param0: androidcontentContext, param1: com.bumptech.glide.load.model.GenericLoaderFactory): com.bumptech.glide.load.model.ModelLoader;
								public teardown(): void;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.bumptech.glide.load.data.DataFetcher.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.GenericLoaderFactory.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ModelLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module file_descriptor {
						export class FileDescriptorStringLoader extends com.bumptech.glide.load.model.StringLoader implements com.bumptech.glide.load.model.file_descriptor.FileDescriptorModelLoader {
							public getResourceFetcher(param0: string, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							public constructor(param0: androidcontentContext);
							public getResourceFetcher(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							public constructor(param0: com.bumptech.glide.load.model.ModelLoader);
						}
						export module FileDescriptorStringLoader {
							export class Factory {
								public build(param0: androidcontentContext, param1: com.bumptech.glide.load.model.GenericLoaderFactory): com.bumptech.glide.load.model.ModelLoader;
								public teardown(): void;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./com.bumptech.glide.load.data.DataFetcher.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.GenericLoaderFactory.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ModelLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module file_descriptor {
						export class FileDescriptorUriLoader extends com.bumptech.glide.load.model.UriLoader implements com.bumptech.glide.load.model.file_descriptor.FileDescriptorModelLoader {
							public getAssetPathFetcher(param0: androidcontentContext, param1: string): com.bumptech.glide.load.data.DataFetcher;
							public constructor(param0: androidcontentContext);
							public getLocalUriFetcher(param0: androidcontentContext, param1: androidnetUri): com.bumptech.glide.load.data.DataFetcher;
							public constructor(param0: androidcontentContext, param1: com.bumptech.glide.load.model.ModelLoader);
							public getResourceFetcher(param0: androidnetUri, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							public getResourceFetcher(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						}
						export module FileDescriptorUriLoader {
							export class Factory {
								public build(param0: androidcontentContext, param1: com.bumptech.glide.load.model.GenericLoaderFactory): com.bumptech.glide.load.model.ModelLoader;
								public teardown(): void;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.bumptech.glide.load.data.DataFetcher.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.Headers.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ModelCache.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ModelLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export abstract class BaseGlideUrlLoader {
							public getHeaders(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.model.Headers;
							public constructor(param0: androidcontentContext);
							public constructor(param0: com.bumptech.glide.load.model.ModelLoader, param1: com.bumptech.glide.load.model.ModelCache);
							public constructor(param0: androidcontentContext, param1: com.bumptech.glide.load.model.ModelCache);
							public getResourceFetcher(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							public getUrl(param0: javalangObject, param1: number, param2: number): string;
							public constructor(param0: com.bumptech.glide.load.model.ModelLoader);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.bumptech.glide.load.data.DataFetcher.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.GenericLoaderFactory.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.GlideUrl.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ModelCache.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ModelLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export class HttpUrlGlideUrlLoader {
							public constructor();
							public getResourceFetcher(param0: com.bumptech.glide.load.model.GlideUrl, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							public constructor(param0: com.bumptech.glide.load.model.ModelCache);
							public getResourceFetcher(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						}
						export module HttpUrlGlideUrlLoader {
							export class Factory {
								public build(param0: androidcontentContext, param1: com.bumptech.glide.load.model.GenericLoaderFactory): com.bumptech.glide.load.model.ModelLoader;
								public teardown(): void;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./com.bumptech.glide.load.data.DataFetcher.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ModelLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export class MediaStoreStreamLoader {
							public constructor(param0: androidcontentContext, param1: com.bumptech.glide.load.model.ModelLoader);
							public getResourceFetcher(param0: androidnetUri, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							public getResourceFetcher(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.bumptech.glide.load.data.DataFetcher.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.GenericLoaderFactory.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ModelLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export class StreamByteArrayLoader {
							public constructor();
							public constructor(param0: string);
							public getResourceFetcher(param0: native.Array<number>, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							public getResourceFetcher(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						}
						export module StreamByteArrayLoader {
							export class Factory {
								public build(param0: androidcontentContext, param1: com.bumptech.glide.load.model.GenericLoaderFactory): com.bumptech.glide.load.model.ModelLoader;
								public teardown(): void;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.bumptech.glide.load.data.DataFetcher.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.GenericLoaderFactory.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ModelLoader.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export class StreamFileLoader extends com.bumptech.glide.load.model.FileLoader implements com.bumptech.glide.load.model.stream.StreamModelLoader {
							public getResourceFetcher(param0: javaioFile, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							public constructor(param0: androidcontentContext);
							public getResourceFetcher(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							public constructor(param0: com.bumptech.glide.load.model.ModelLoader);
						}
						export module StreamFileLoader {
							export class Factory {
								public build(param0: androidcontentContext, param1: com.bumptech.glide.load.model.GenericLoaderFactory): com.bumptech.glide.load.model.ModelLoader;
								public teardown(): void;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.data.DataFetcher.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export class StreamModelLoader {
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.model.stream.StreamModelLoader interface with the provided implementation.
							 */
							public constructor(implementation: {
								getResourceFetcher(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							});
							public getResourceFetcher(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./com.bumptech.glide.load.data.DataFetcher.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.GenericLoaderFactory.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ModelLoader.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export class StreamResourceLoader extends com.bumptech.glide.load.model.ResourceLoader implements com.bumptech.glide.load.model.stream.StreamModelLoader {
							public constructor(param0: androidcontentresResources, param1: com.bumptech.glide.load.model.ModelLoader);
							public getResourceFetcher(param0: javalangInteger, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							public constructor(param0: androidcontentContext);
							public constructor(param0: androidcontentContext, param1: com.bumptech.glide.load.model.ModelLoader);
							public getResourceFetcher(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						}
						export module StreamResourceLoader {
							export class Factory {
								public build(param0: androidcontentContext, param1: com.bumptech.glide.load.model.GenericLoaderFactory): com.bumptech.glide.load.model.ModelLoader;
								public teardown(): void;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.bumptech.glide.load.data.DataFetcher.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.GenericLoaderFactory.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ModelLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export class StreamStringLoader extends com.bumptech.glide.load.model.StringLoader implements com.bumptech.glide.load.model.stream.StreamModelLoader {
							public getResourceFetcher(param0: string, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							public constructor(param0: androidcontentContext);
							public getResourceFetcher(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							public constructor(param0: com.bumptech.glide.load.model.ModelLoader);
						}
						export module StreamStringLoader {
							export class Factory {
								public build(param0: androidcontentContext, param1: com.bumptech.glide.load.model.GenericLoaderFactory): com.bumptech.glide.load.model.ModelLoader;
								public teardown(): void;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./com.bumptech.glide.load.data.DataFetcher.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.GenericLoaderFactory.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ModelLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export class StreamUriLoader extends com.bumptech.glide.load.model.UriLoader implements com.bumptech.glide.load.model.stream.StreamModelLoader {
							public getAssetPathFetcher(param0: androidcontentContext, param1: string): com.bumptech.glide.load.data.DataFetcher;
							public constructor(param0: androidcontentContext);
							public getLocalUriFetcher(param0: androidcontentContext, param1: androidnetUri): com.bumptech.glide.load.data.DataFetcher;
							public constructor(param0: androidcontentContext, param1: com.bumptech.glide.load.model.ModelLoader);
							public getResourceFetcher(param0: androidnetUri, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							public getResourceFetcher(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						}
						export module StreamUriLoader {
							export class Factory {
								public build(param0: androidcontentContext, param1: com.bumptech.glide.load.model.GenericLoaderFactory): com.bumptech.glide.load.model.ModelLoader;
								public teardown(): void;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.bumptech.glide.load.data.DataFetcher.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.GenericLoaderFactory.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ModelLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export class StreamUrlLoader extends com.bumptech.glide.load.model.UrlLoader {
							public getResourceFetcher(param0: javanetURL, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							public getResourceFetcher(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							public constructor(param0: com.bumptech.glide.load.model.ModelLoader);
						}
						export module StreamUrlLoader {
							export class Factory {
								public build(param0: androidcontentContext, param1: com.bumptech.glide.load.model.GenericLoaderFactory): com.bumptech.glide.load.model.ModelLoader;
								public teardown(): void;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export class NullDecoder {
						public constructor();
						public decode(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
						public static get(): com.bumptech.glide.load.resource.NullDecoder;
						public getId(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.Encoder.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export class NullEncoder {
						public constructor();
						public encode(param0: javalangObject, param1: javaioOutputStream): boolean;
						public getId(): string;
						public static get(): com.bumptech.glide.load.Encoder;
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export class NullResourceEncoder {
						public constructor();
						public encode(param0: javalangObject, param1: javaioOutputStream): boolean;
						public static get(): com.bumptech.glide.load.resource.NullResourceEncoder;
						public getId(): string;
						public encode(param0: com.bumptech.glide.load.engine.Resource, param1: javaioOutputStream): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export class SimpleResource {
						public data: javalangObject;
						public constructor(param0: javalangObject);
						public getSize(): number;
						public recycle(): void;
						public get(): javalangObject;
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export class UnitTransformation {
						public constructor();
						public transform(param0: com.bumptech.glide.load.engine.Resource, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
						public static get(): com.bumptech.glide.load.resource.UnitTransformation;
						public getId(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./com.bumptech.glide.load.DecodeFormat.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class BitmapDecoder {
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.resource.bitmap.BitmapDecoder interface with the provided implementation.
							 */
							public constructor(implementation: {
								decode(param0: javalangObject, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: number, param3: number, param4: com.bumptech.glide.load.DecodeFormat): androidgraphicsBitmap;
								getId(): string;
							});
							public decode(param0: javalangObject, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: number, param3: number, param4: com.bumptech.glide.load.DecodeFormat): androidgraphicsBitmap;
							public getId(): string;
						}
					}
				}
			}
		}
	}
}

import androidgraphicsdrawableBitmapDrawable = android.graphics.drawable.BitmapDrawable;
/// <reference path="./android.graphics.drawable.BitmapDrawable.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class BitmapDrawableResource extends com.bumptech.glide.load.resource.drawable.DrawableResource {
							public constructor(param0: androidgraphicsdrawableBitmapDrawable, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public getSize(): number;
							public constructor(param0: androidgraphicsdrawableDrawable);
							public get(): androidgraphicsdrawableDrawable;
							public get(): javalangObject;
							public recycle(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class BitmapEncoder {
							public constructor();
							public encode(param0: javalangObject, param1: javaioOutputStream): boolean;
							public getId(): string;
							public constructor(param0: androidgraphicsBitmapCompressFormat, param1: number);
							public encode(param0: com.bumptech.glide.load.engine.Resource, param1: javaioOutputStream): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class BitmapResource {
							public constructor(param0: androidgraphicsBitmap, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public static obtain(param0: androidgraphicsBitmap, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool): com.bumptech.glide.load.resource.bitmap.BitmapResource;
							public get(): androidgraphicsBitmap;
							public getSize(): number;
							public get(): javalangObject;
							public recycle(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export abstract class BitmapTransformation {
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public transform(param0: com.bumptech.glide.load.engine.Resource, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public constructor(param0: androidcontentContext);
							public getId(): string;
							public transform(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: androidgraphicsBitmap, param2: number, param3: number): androidgraphicsBitmap;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class CenterCrop extends com.bumptech.glide.load.resource.bitmap.BitmapTransformation {
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public transform(param0: com.bumptech.glide.load.engine.Resource, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public constructor(param0: androidcontentContext);
							public getId(): string;
							public transform(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: androidgraphicsBitmap, param2: number, param3: number): androidgraphicsBitmap;
						}
					}
				}
			}
		}
	}
}

import androidgraphicsBitmapFactoryOptions = android.graphics.BitmapFactory.Options;
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./com.bumptech.glide.load.DecodeFormat.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool.d.ts" />
/// <reference path="./com.bumptech.glide.load.resource.bitmap.RecyclableBufferedInputStream.d.ts" />
/// <reference path="./com.bumptech.glide.util.MarkEnforcingInputStream.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export abstract class Downsampler {
							public static AT_LEAST: com.bumptech.glide.load.resource.bitmap.Downsampler;
							public static AT_MOST: com.bumptech.glide.load.resource.bitmap.Downsampler;
							public static NONE: com.bumptech.glide.load.resource.bitmap.Downsampler;
							public constructor();
							public decode(param0: javaioInputStream, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: number, param3: number, param4: com.bumptech.glide.load.DecodeFormat): androidgraphicsBitmap;
							public decode(param0: javalangObject, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: number, param3: number, param4: com.bumptech.glide.load.DecodeFormat): androidgraphicsBitmap;
							public getDimensions(param0: com.bumptech.glide.util.MarkEnforcingInputStream, param1: com.bumptech.glide.load.resource.bitmap.RecyclableBufferedInputStream, param2: androidgraphicsBitmapFactoryOptions): native.Array<number>;
							public getSampleSize(param0: number, param1: number, param2: number, param3: number): number;
							public getId(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.DecodeFormat.d.ts" />
/// <reference path="./com.bumptech.glide.load.Encoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceDecoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceEncoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class FileDescriptorBitmapDataLoadProvider {
							public getSourceDecoder(): com.bumptech.glide.load.ResourceDecoder;
							public getEncoder(): com.bumptech.glide.load.ResourceEncoder;
							public getSourceEncoder(): com.bumptech.glide.load.Encoder;
							public getCacheDecoder(): com.bumptech.glide.load.ResourceDecoder;
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: com.bumptech.glide.load.DecodeFormat);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./com.bumptech.glide.load.DecodeFormat.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool.d.ts" />
/// <reference path="./com.bumptech.glide.load.resource.bitmap.VideoBitmapDecoder.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class FileDescriptorBitmapDecoder {
							public decode(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public constructor(param0: androidcontentContext);
							public getId(): string;
							public decode(param0: androidosParcelFileDescriptor, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public constructor(param0: com.bumptech.glide.load.resource.bitmap.VideoBitmapDecoder, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: com.bumptech.glide.load.DecodeFormat);
							public constructor(param0: androidcontentContext, param1: com.bumptech.glide.load.DecodeFormat);
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: com.bumptech.glide.load.DecodeFormat);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class FitCenter extends com.bumptech.glide.load.resource.bitmap.BitmapTransformation {
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public transform(param0: com.bumptech.glide.load.engine.Resource, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public constructor(param0: androidcontentContext);
							public getId(): string;
							public transform(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: androidgraphicsBitmap, param2: number, param3: number): androidgraphicsBitmap;
						}
					}
				}
			}
		}
	}
}

import androidgraphicsRect = android.graphics.Rect;
import androidgraphicsdrawableDrawableConstantState = android.graphics.drawable.Drawable.ConstantState;
import androidgraphicsCanvas = android.graphics.Canvas;
import androidgraphicsColorFilter = android.graphics.ColorFilter;
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class GlideBitmapDrawable extends com.bumptech.glide.load.resource.drawable.GlideDrawable {
							public constructor();
							public onBoundsChange(param0: androidgraphicsRect): void;
							public constructor(param0: androidcontentresResources, param1: androidgraphicsBitmap);
							public isAnimated(): boolean;
							public getIntrinsicHeight(): number;
							public isRunning(): boolean;
							public setAlpha(param0: number): void;
							public mutate(): androidgraphicsdrawableDrawable;
							public stop(): void;
							public draw(param0: androidgraphicsCanvas): void;
							public setColorFilter(param0: androidgraphicsColorFilter): void;
							public start(): void;
							public setLoopCount(param0: number): void;
							public getBitmap(): androidgraphicsBitmap;
							public getIntrinsicWidth(): number;
							public getOpacity(): number;
							public getConstantState(): androidgraphicsdrawableDrawableConstantState;
						}
						export module GlideBitmapDrawable {
							export class BitmapState {
								public constructor(param0: androidgraphicsBitmap);
								public getChangingConfigurations(): number;
								public newDrawable(): androidgraphicsdrawableDrawable;
								public newDrawable(param0: androidcontentresResources): androidgraphicsdrawableDrawable;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool.d.ts" />
/// <reference path="./com.bumptech.glide.load.resource.bitmap.GlideBitmapDrawable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class GlideBitmapDrawableResource extends com.bumptech.glide.load.resource.drawable.DrawableResource {
							public getSize(): number;
							public constructor(param0: androidgraphicsdrawableDrawable);
							public get(): androidgraphicsdrawableDrawable;
							public get(): javalangObject;
							public recycle(): void;
							public constructor(param0: com.bumptech.glide.load.resource.bitmap.GlideBitmapDrawable, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
						}
					}
				}
			}
		}
	}
}

import javanioByteOrder = java.nio.ByteOrder;
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteOrder.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class ImageHeaderParser {
							public constructor(param0: javaioInputStream);
							public getType(): com.bumptech.glide.load.resource.bitmap.ImageHeaderParser.ImageType;
							public getOrientation(): number;
							public hasAlpha(): boolean;
						}
						export module ImageHeaderParser {
							export class ImageType {
								public static GIF: com.bumptech.glide.load.resource.bitmap.ImageHeaderParser.ImageType;
								public static JPEG: com.bumptech.glide.load.resource.bitmap.ImageHeaderParser.ImageType;
								public static PNG_A: com.bumptech.glide.load.resource.bitmap.ImageHeaderParser.ImageType;
								public static PNG: com.bumptech.glide.load.resource.bitmap.ImageHeaderParser.ImageType;
								public static UNKNOWN: com.bumptech.glide.load.resource.bitmap.ImageHeaderParser.ImageType;
								public hasAlpha(): boolean;
								public static values(): native.Array<com.bumptech.glide.load.resource.bitmap.ImageHeaderParser.ImageType>;
								public static valueOf(param0: string): com.bumptech.glide.load.resource.bitmap.ImageHeaderParser.ImageType;
							}
							export class RandomAccessReader {
								public getInt16(param0: number): number;
								public length(): number;
								public order(param0: javanioByteOrder): void;
								public getInt32(param0: number): number;
								public constructor(param0: native.Array<number>);
							}
							export class StreamReader {
								public constructor(param0: javaioInputStream);
								public read(param0: native.Array<number>): number;
								public skip(param0: number): number;
								public getUInt8(): number;
								public getUInt16(): number;
								public getByte(): number;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.ResourceDecoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ImageVideoWrapper.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class ImageVideoBitmapDecoder {
							public decode(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public getId(): string;
							public decode(param0: com.bumptech.glide.load.model.ImageVideoWrapper, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public constructor(param0: com.bumptech.glide.load.ResourceDecoder, param1: com.bumptech.glide.load.ResourceDecoder);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.Encoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceDecoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceEncoder.d.ts" />
/// <reference path="./com.bumptech.glide.provider.DataLoadProvider.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class ImageVideoDataLoadProvider {
							public getSourceDecoder(): com.bumptech.glide.load.ResourceDecoder;
							public getEncoder(): com.bumptech.glide.load.ResourceEncoder;
							public getSourceEncoder(): com.bumptech.glide.load.Encoder;
							public getCacheDecoder(): com.bumptech.glide.load.ResourceDecoder;
							public constructor(param0: com.bumptech.glide.provider.DataLoadProvider, param1: com.bumptech.glide.provider.DataLoadProvider);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class RecyclableBufferedInputStream {
							public mark(param0: number): void;
							public markSupported(): boolean;
							public close(): void;
							public skip(param0: number): number;
							public available(): number;
							public fixMarkLimit(): void;
							public read(): number;
							public constructor(param0: javaioInputStream, param1: native.Array<number>);
							public read(param0: native.Array<number>, param1: number, param2: number): number;
							public reset(): void;
						}
						export module RecyclableBufferedInputStream {
							export class InvalidMarkException {
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.DecodeFormat.d.ts" />
/// <reference path="./com.bumptech.glide.load.Encoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceDecoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceEncoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class StreamBitmapDataLoadProvider {
							public getSourceDecoder(): com.bumptech.glide.load.ResourceDecoder;
							public getEncoder(): com.bumptech.glide.load.ResourceEncoder;
							public getSourceEncoder(): com.bumptech.glide.load.Encoder;
							public getCacheDecoder(): com.bumptech.glide.load.ResourceDecoder;
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: com.bumptech.glide.load.DecodeFormat);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.bumptech.glide.load.DecodeFormat.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool.d.ts" />
/// <reference path="./com.bumptech.glide.load.resource.bitmap.Downsampler.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class StreamBitmapDecoder {
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public constructor(param0: com.bumptech.glide.load.resource.bitmap.Downsampler, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: com.bumptech.glide.load.DecodeFormat);
							public decode(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public constructor(param0: androidcontentContext);
							public decode(param0: javaioInputStream, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public getId(): string;
							public constructor(param0: androidcontentContext, param1: com.bumptech.glide.load.DecodeFormat);
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: com.bumptech.glide.load.DecodeFormat);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class TransformationUtils {
							public static PAINT_FLAGS: number;
							public static rotateImageExif(param0: androidgraphicsBitmap, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: number): androidgraphicsBitmap;
							public static getOrientation(param0: string): number;
							public static getExifOrientationDegrees(param0: number): number;
							public static fitCenter(param0: androidgraphicsBitmap, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: number, param3: number): androidgraphicsBitmap;
							public static centerCrop(param0: androidgraphicsBitmap, param1: androidgraphicsBitmap, param2: number, param3: number): androidgraphicsBitmap;
							public static orientImage(param0: string, param1: androidgraphicsBitmap): androidgraphicsBitmap;
							public static setAlpha(param0: androidgraphicsBitmap, param1: androidgraphicsBitmap): void;
							public static rotateImage(param0: androidgraphicsBitmap, param1: number): androidgraphicsBitmap;
						}
					}
				}
			}
		}
	}
}

import androidmediaMediaMetadataRetriever = android.media.MediaMetadataRetriever;
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.media.MediaMetadataRetriever.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./com.bumptech.glide.load.DecodeFormat.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class VideoBitmapDecoder {
							public constructor();
							public decode(param0: javalangObject, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: number, param3: number, param4: com.bumptech.glide.load.DecodeFormat): androidgraphicsBitmap;
							public getId(): string;
							public decode(param0: androidosParcelFileDescriptor, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: number, param3: number, param4: com.bumptech.glide.load.DecodeFormat): androidgraphicsBitmap;
							public constructor(param0: number);
						}
						export module VideoBitmapDecoder {
							export class MediaMetadataRetrieverFactory {
								public build(): androidmediaMediaMetadataRetriever;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bytes {
						export class BytesResource {
							public constructor(param0: native.Array<number>);
							public getSize(): number;
							public get(): javalangObject;
							public get(): native.Array<number>;
							public recycle(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module drawable {
						export abstract class DrawableResource {
							public drawable: androidgraphicsdrawableDrawable;
							public getSize(): number;
							public constructor(param0: androidgraphicsdrawableDrawable);
							public get(): androidgraphicsdrawableDrawable;
							public get(): javalangObject;
							public recycle(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module drawable {
						export abstract class GlideDrawable {
							public static LOOP_FOREVER: number;
							public static LOOP_INTRINSIC: number;
							public constructor();
							public isAnimated(): boolean;
							public setLoopCount(param0: number): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module file {
						export class FileDecoder {
							public constructor();
							public decode(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public getId(): string;
							public decode(param0: javaioFile, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module file {
						export class FileResource extends com.bumptech.glide.load.resource.SimpleResource {
							public constructor(param0: javalangObject);
							public constructor(param0: javaioFile);
							public getSize(): number;
							public get(): javalangObject;
							public recycle(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.ResourceDecoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module file {
						export class FileToStreamDecoder {
							public decode(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public getId(): string;
							public constructor(param0: com.bumptech.glide.load.ResourceDecoder);
							public decode(param0: javaioFile, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
						}
						export module FileToStreamDecoder {
							export class FileOpener {
								public open(param0: javaioFile): javaioInputStream;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.Encoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceDecoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceEncoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module file {
						export class StreamFileDataLoadProvider {
							public constructor();
							public getSourceDecoder(): com.bumptech.glide.load.ResourceDecoder;
							public getEncoder(): com.bumptech.glide.load.ResourceEncoder;
							public getSourceEncoder(): com.bumptech.glide.load.Encoder;
							public getCacheDecoder(): com.bumptech.glide.load.ResourceDecoder;
						}
						export module StreamFileDataLoadProvider {
							export class ErrorSourceDecoder {
								public decode(param0: javaioInputStream, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
								public getId(): string;
								public decode(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifBitmapProvider {
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public release(param0: androidgraphicsBitmap): void;
							public obtain(param0: number, param1: number, param2: androidgraphicsBitmapConfig): androidgraphicsBitmap;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./com.bumptech.glide.gifdecoder.GifDecoder.d.ts" />
/// <reference path="./com.bumptech.glide.gifdecoder.GifHeader.d.ts" />
/// <reference path="./com.bumptech.glide.load.Transformation.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifDrawable extends com.bumptech.glide.load.resource.drawable.GlideDrawable implements com.bumptech.glide.load.resource.gif.GifFrameLoader.FrameCallback {
							public onBoundsChange(param0: androidgraphicsRect): void;
							public getData(): native.Array<number>;
							public setVisible(param0: boolean, param1: boolean): boolean;
							public isRunning(): boolean;
							public stop(): void;
							public draw(param0: androidgraphicsCanvas): void;
							public start(): void;
							public setLoopCount(param0: number): void;
							public getIntrinsicWidth(): number;
							public setFrameTransformation(param0: com.bumptech.glide.load.Transformation, param1: androidgraphicsBitmap): void;
							public getConstantState(): androidgraphicsdrawableDrawableConstantState;
							public constructor();
							public constructor(param0: com.bumptech.glide.load.resource.gif.GifDrawable, param1: androidgraphicsBitmap, param2: com.bumptech.glide.load.Transformation);
							public getFirstFrame(): androidgraphicsBitmap;
							public getFrameCount(): number;
							public isAnimated(): boolean;
							public getIntrinsicHeight(): number;
							public getDecoder(): com.bumptech.glide.gifdecoder.GifDecoder;
							public getFrameTransformation(): com.bumptech.glide.load.Transformation;
							public onFrameReady(param0: number): void;
							public setAlpha(param0: number): void;
							public setColorFilter(param0: androidgraphicsColorFilter): void;
							public getOpacity(): number;
							public recycle(): void;
							public constructor(param0: androidcontentContext, param1: com.bumptech.glide.gifdecoder.GifDecoder.BitmapProvider, param2: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param3: com.bumptech.glide.load.Transformation, param4: number, param5: number, param6: com.bumptech.glide.gifdecoder.GifHeader, param7: native.Array<number>, param8: androidgraphicsBitmap);
						}
						export module GifDrawable {
							export class GifState {
								public constructor(param0: com.bumptech.glide.load.resource.gif.GifDrawable.GifState);
								public getChangingConfigurations(): number;
								public constructor(param0: com.bumptech.glide.gifdecoder.GifHeader, param1: native.Array<number>, param2: androidcontentContext, param3: com.bumptech.glide.load.Transformation, param4: number, param5: number, param6: com.bumptech.glide.gifdecoder.GifDecoder.BitmapProvider, param7: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param8: androidgraphicsBitmap);
								public newDrawable(): androidgraphicsdrawableDrawable;
								public newDrawable(param0: androidcontentresResources): androidgraphicsdrawableDrawable;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.bumptech.glide.load.Encoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceDecoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceEncoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifDrawableLoadProvider {
							public constructor(param0: androidcontentContext, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public getSourceDecoder(): com.bumptech.glide.load.ResourceDecoder;
							public getEncoder(): com.bumptech.glide.load.ResourceEncoder;
							public getSourceEncoder(): com.bumptech.glide.load.Encoder;
							public getCacheDecoder(): com.bumptech.glide.load.ResourceDecoder;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./com.bumptech.glide.load.resource.gif.GifDrawable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifDrawableResource extends com.bumptech.glide.load.resource.drawable.DrawableResource {
							public constructor(param0: com.bumptech.glide.load.resource.gif.GifDrawable);
							public getSize(): number;
							public constructor(param0: androidgraphicsdrawableDrawable);
							public get(): androidgraphicsdrawableDrawable;
							public get(): javalangObject;
							public recycle(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.Transformation.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifDrawableTransformation {
							public transform(param0: com.bumptech.glide.load.engine.Resource, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public getId(): string;
							public constructor(param0: com.bumptech.glide.load.Transformation, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
						}
					}
				}
			}
		}
	}
}

import androidosHandler = android.os.Handler;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./com.bumptech.glide.gifdecoder.GifDecoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.Transformation.d.ts" />
/// <reference path="./com.bumptech.glide.request.Request.d.ts" />
/// <reference path="./com.bumptech.glide.request.animation.GlideAnimation.d.ts" />
/// <reference path="./com.bumptech.glide.request.target.SizeReadyCallback.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.security.MessageDigest.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifFrameLoader {
							public constructor(param0: androidcontentContext, param1: com.bumptech.glide.load.resource.gif.GifFrameLoader.FrameCallback, param2: com.bumptech.glide.gifdecoder.GifDecoder, param3: number, param4: number);
							public setFrameTransformation(param0: com.bumptech.glide.load.Transformation): void;
							public stop(): void;
							public start(): void;
							public clear(): void;
							public getCurrentFrame(): androidgraphicsBitmap;
						}
						export module GifFrameLoader {
							export class DelayTarget extends com.bumptech.glide.request.target.SimpleTarget {
								public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
								public constructor(param0: androidosHandler, param1: number, param2: number);
								public onResourceReady(param0: javalangObject, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
								public onLoadCleared(param0: androidgraphicsdrawableDrawable): void;
								public getRequest(): com.bumptech.glide.request.Request;
								public constructor(param0: number, param1: number);
								public setRequest(param0: com.bumptech.glide.request.Request): void;
								public onLoadStarted(param0: androidgraphicsdrawableDrawable): void;
								public onResourceReady(param0: androidgraphicsBitmap, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
								public constructor();
								public onLoadFailed(param0: javalangException, param1: androidgraphicsdrawableDrawable): void;
								public getResource(): androidgraphicsBitmap;
							}
							export class FrameCallback {
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.resource.gif.GifFrameLoader$FrameCallback interface with the provided implementation.
								 */
								public constructor(implementation: {
									onFrameReady(param0: number): void;
								});
								public onFrameReady(param0: number): void;
							}
							export class FrameLoaderCallback {
								public static MSG_DELAY: number;
								public static MSG_CLEAR: number;
								public handleMessage(param0: androidosMessage): boolean;
							}
							export class FrameSignature {
								public equals(param0: javalangObject): boolean;
								public constructor();
								public hashCode(): number;
								public updateDiskCacheKey(param0: javasecurityMessageDigest): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.Priority.d.ts" />
/// <reference path="./com.bumptech.glide.gifdecoder.GifDecoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.data.DataFetcher.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifFrameModelLoader {
							public getResourceFetcher(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							public getResourceFetcher(param0: com.bumptech.glide.gifdecoder.GifDecoder, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						}
						export module GifFrameModelLoader {
							export class GifFrameDataFetcher {
								public constructor(param0: com.bumptech.glide.gifdecoder.GifDecoder);
								public cancel(): void;
								public loadData(param0: com.bumptech.glide.Priority): com.bumptech.glide.gifdecoder.GifDecoder;
								public loadData(param0: com.bumptech.glide.Priority): javalangObject;
								public cleanup(): void;
								public getId(): string;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.gifdecoder.GifDecoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifFrameResourceDecoder {
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public decode(param0: com.bumptech.glide.gifdecoder.GifDecoder, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public decode(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public getId(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.bumptech.glide.gifdecoder.GifDecoder.d.ts" />
/// <reference path="./com.bumptech.glide.gifdecoder.GifHeaderParser.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool.d.ts" />
/// <reference path="./com.bumptech.glide.load.resource.gif.GifDrawableResource.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifResourceDecoder {
							public constructor(param0: androidcontentContext, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public decode(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public constructor(param0: androidcontentContext);
							public getId(): string;
							public decode(param0: javaioInputStream, param1: number, param2: number): com.bumptech.glide.load.resource.gif.GifDrawableResource;
						}
						export module GifResourceDecoder {
							export class GifDecoderPool {
								public obtain(param0: com.bumptech.glide.gifdecoder.GifDecoder.BitmapProvider): com.bumptech.glide.gifdecoder.GifDecoder;
								public release(param0: com.bumptech.glide.gifdecoder.GifDecoder): void;
							}
							export class GifHeaderParserPool {
								public obtain(param0: native.Array<number>): com.bumptech.glide.gifdecoder.GifHeaderParser;
								public release(param0: com.bumptech.glide.gifdecoder.GifHeaderParser): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./com.bumptech.glide.gifdecoder.GifDecoder.d.ts" />
/// <reference path="./com.bumptech.glide.gifdecoder.GifHeaderParser.d.ts" />
/// <reference path="./com.bumptech.glide.gifencoder.AnimatedGifEncoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifResourceEncoder {
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public encode(param0: javalangObject, param1: javaioOutputStream): boolean;
							public getId(): string;
							public encode(param0: com.bumptech.glide.load.engine.Resource, param1: javaioOutputStream): boolean;
						}
						export module GifResourceEncoder {
							export class Factory {
								public buildParser(): com.bumptech.glide.gifdecoder.GifHeaderParser;
								public buildDecoder(param0: com.bumptech.glide.gifdecoder.GifDecoder.BitmapProvider): com.bumptech.glide.gifdecoder.GifDecoder;
								public buildFrameResource(param0: androidgraphicsBitmap, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool): com.bumptech.glide.load.engine.Resource;
								public buildEncoder(): com.bumptech.glide.gifencoder.AnimatedGifEncoder;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gifbitmap {
						export class GifBitmapWrapper {
							public constructor(param0: com.bumptech.glide.load.engine.Resource, param1: com.bumptech.glide.load.engine.Resource);
							public getSize(): number;
							public getBitmapResource(): com.bumptech.glide.load.engine.Resource;
							public getGifResource(): com.bumptech.glide.load.engine.Resource;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.resource.gifbitmap.GifBitmapWrapper.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gifbitmap {
						export class GifBitmapWrapperResource {
							public getSize(): number;
							public constructor(param0: com.bumptech.glide.load.resource.gifbitmap.GifBitmapWrapper);
							public get(): javalangObject;
							public recycle(): void;
							public get(): com.bumptech.glide.load.resource.gifbitmap.GifBitmapWrapper;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.ResourceDecoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ImageVideoWrapper.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gifbitmap {
						export class GifBitmapWrapperResourceDecoder {
							public decode(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public getId(): string;
							public decode(param0: com.bumptech.glide.load.model.ImageVideoWrapper, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public constructor(param0: com.bumptech.glide.load.ResourceDecoder, param1: com.bumptech.glide.load.ResourceDecoder, param2: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
						}
						export module GifBitmapWrapperResourceDecoder {
							export class BufferedStreamFactory {
								public build(param0: javaioInputStream, param1: native.Array<number>): javaioInputStream;
							}
							export class ImageTypeParser {
								public parse(param0: javaioInputStream): com.bumptech.glide.load.resource.bitmap.ImageHeaderParser.ImageType;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.ResourceEncoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gifbitmap {
						export class GifBitmapWrapperResourceEncoder {
							public encode(param0: javalangObject, param1: javaioOutputStream): boolean;
							public getId(): string;
							public constructor(param0: com.bumptech.glide.load.ResourceEncoder, param1: com.bumptech.glide.load.ResourceEncoder);
							public encode(param0: com.bumptech.glide.load.engine.Resource, param1: javaioOutputStream): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.ResourceDecoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gifbitmap {
						export class GifBitmapWrapperStreamResourceDecoder {
							public decode(param0: javalangObject, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public decode(param0: javaioInputStream, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public getId(): string;
							public constructor(param0: com.bumptech.glide.load.ResourceDecoder);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.Transformation.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gifbitmap {
						export class GifBitmapWrapperTransformation {
							public transform(param0: com.bumptech.glide.load.engine.Resource, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public getId(): string;
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: com.bumptech.glide.load.Transformation);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.Encoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceDecoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceEncoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool.d.ts" />
/// <reference path="./com.bumptech.glide.provider.DataLoadProvider.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gifbitmap {
						export class ImageVideoGifDrawableLoadProvider {
							public constructor(param0: com.bumptech.glide.provider.DataLoadProvider, param1: com.bumptech.glide.provider.DataLoadProvider, param2: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public getSourceDecoder(): com.bumptech.glide.load.ResourceDecoder;
							public getEncoder(): com.bumptech.glide.load.ResourceEncoder;
							public getSourceEncoder(): com.bumptech.glide.load.Encoder;
							public getCacheDecoder(): com.bumptech.glide.load.ResourceDecoder;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module transcode {
						export class BitmapBytesTranscoder {
							public constructor();
							public getId(): string;
							public constructor(param0: androidgraphicsBitmapCompressFormat, param1: number);
							public transcode(param0: com.bumptech.glide.load.engine.Resource): com.bumptech.glide.load.engine.Resource;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./com.bumptech.glide.load.resource.transcode.GlideBitmapDrawableTranscoder.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module transcode {
						export class BitmapToGlideDrawableTranscoder {
							public constructor(param0: androidcontentContext);
							public getId(): string;
							public constructor(param0: com.bumptech.glide.load.resource.transcode.GlideBitmapDrawableTranscoder);
							public transcode(param0: com.bumptech.glide.load.engine.Resource): com.bumptech.glide.load.engine.Resource;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./com.bumptech.glide.load.resource.transcode.ResourceTranscoder.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module transcode {
						export class GifBitmapWrapperDrawableTranscoder {
							public getId(): string;
							public constructor(param0: com.bumptech.glide.load.resource.transcode.ResourceTranscoder);
							public transcode(param0: com.bumptech.glide.load.engine.Resource): com.bumptech.glide.load.engine.Resource;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module transcode {
						export class GifDrawableBytesTranscoder {
							public constructor();
							public getId(): string;
							public transcode(param0: com.bumptech.glide.load.engine.Resource): com.bumptech.glide.load.engine.Resource;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module transcode {
						export class GlideBitmapDrawableTranscoder {
							public constructor(param0: androidcontentContext);
							public getId(): string;
							public constructor(param0: androidcontentresResources, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public transcode(param0: com.bumptech.glide.load.engine.Resource): com.bumptech.glide.load.engine.Resource;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module transcode {
						export class ResourceTranscoder {
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.resource.transcode.ResourceTranscoder interface with the provided implementation.
							 */
							public constructor(implementation: {
								transcode(param0: com.bumptech.glide.load.engine.Resource): com.bumptech.glide.load.engine.Resource;
								getId(): string;
							});
							public getId(): string;
							public transcode(param0: com.bumptech.glide.load.engine.Resource): com.bumptech.glide.load.engine.Resource;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.resource.transcode.ResourceTranscoder.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module transcode {
						export class TranscoderRegistry {
							public constructor();
							public register(param0: javalangClass, param1: javalangClass, param2: com.bumptech.glide.load.resource.transcode.ResourceTranscoder): void;
							public get(param0: javalangClass, param1: javalangClass): com.bumptech.glide.load.resource.transcode.ResourceTranscoder;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./com.bumptech.glide.load.resource.transcode.ResourceTranscoder.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module transcode {
						export class UnitTranscoder {
							public constructor();
							public getId(): string;
							public static get(): com.bumptech.glide.load.resource.transcode.ResourceTranscoder;
							public transcode(param0: com.bumptech.glide.load.engine.Resource): com.bumptech.glide.load.engine.Resource;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.manager.LifecycleListener.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class ActivityFragmentLifecycle {
					public addListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.manager.LifecycleListener.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class ApplicationLifecycle {
					public addListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class ConnectivityMonitor {
					/**
					 * Constructs a new instance of the com.bumptech.glide.manager.ConnectivityMonitor interface with the provided implementation.
					 */
					public constructor(implementation: {
						onStart(): void;
						onStop(): void;
						onDestroy(): void;
					});
					public onStart(): void;
					public onStop(): void;
					public onDestroy(): void;
				}
				export module ConnectivityMonitor {
					export class ConnectivityListener {
						/**
						 * Constructs a new instance of the com.bumptech.glide.manager.ConnectivityMonitor$ConnectivityListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onConnectivityChanged(param0: boolean): void;
						});
						public onConnectivityChanged(param0: boolean): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.bumptech.glide.manager.ConnectivityMonitor.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class ConnectivityMonitorFactory {
					public constructor();
					public build(param0: androidcontentContext, param1: com.bumptech.glide.manager.ConnectivityMonitor.ConnectivityListener): com.bumptech.glide.manager.ConnectivityMonitor;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class DefaultConnectivityMonitor {
					public onStart(): void;
					public constructor(param0: androidcontentContext, param1: com.bumptech.glide.manager.ConnectivityMonitor.ConnectivityListener);
					public onStop(): void;
					public onDestroy(): void;
				}
			}
		}
	}
}

/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class EmptyRequestManagerTreeNode {
					public getDescendants(): javautilSet;
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.manager.LifecycleListener.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class Lifecycle {
					/**
					 * Constructs a new instance of the com.bumptech.glide.manager.Lifecycle interface with the provided implementation.
					 */
					public constructor(implementation: {
						addListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
					});
					public addListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class LifecycleListener {
					/**
					 * Constructs a new instance of the com.bumptech.glide.manager.LifecycleListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						onStart(): void;
						onStop(): void;
						onDestroy(): void;
					});
					public onStart(): void;
					public onStop(): void;
					public onDestroy(): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class NullConnectivityMonitor {
					public onStart(): void;
					public onStop(): void;
					public onDestroy(): void;
				}
			}
		}
	}
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./com.bumptech.glide.RequestManager.d.ts" />
/// <reference path="./com.bumptech.glide.manager.RequestManagerTreeNode.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class RequestManagerFragment {
					public setRequestManager(param0: com.bumptech.glide.RequestManager): void;
					public getDescendantRequestManagerFragments(): javautilSet;
					public onStart(): void;
					public onAttach(param0: androidappActivity): void;
					public onTrimMemory(param0: number): void;
					public getRequestManager(): com.bumptech.glide.RequestManager;
					public constructor();
					public onDetach(): void;
					public onStop(): void;
					public onDestroy(): void;
					public getRequestManagerTreeNode(): com.bumptech.glide.manager.RequestManagerTreeNode;
					public onLowMemory(): void;
				}
				export module RequestManagerFragment {
					export class FragmentRequestManagerTreeNode {
						public getDescendants(): javautilSet;
					}
				}
			}
		}
	}
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.app.Fragment.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./android.support.v4.app.Fragment.d.ts" />
/// <reference path="./android.support.v4.app.FragmentActivity.d.ts" />
/// <reference path="./com.bumptech.glide.RequestManager.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class RequestManagerRetriever {
					public get(param0: androidsupportv4appFragment): com.bumptech.glide.RequestManager;
					public handleMessage(param0: androidosMessage): boolean;
					public get(param0: androidsupportv4appFragmentActivity): com.bumptech.glide.RequestManager;
					public get(param0: androidappActivity): com.bumptech.glide.RequestManager;
					public get(param0: androidcontentContext): com.bumptech.glide.RequestManager;
					public get(param0: androidappFragment): com.bumptech.glide.RequestManager;
					public static get(): com.bumptech.glide.manager.RequestManagerRetriever;
				}
			}
		}
	}
}

/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class RequestManagerTreeNode {
					/**
					 * Constructs a new instance of the com.bumptech.glide.manager.RequestManagerTreeNode interface with the provided implementation.
					 */
					public constructor(implementation: {
						getDescendants(): javautilSet;
					});
					public getDescendants(): javautilSet;
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.request.Request.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class RequestTracker {
					public removeRequest(param0: com.bumptech.glide.request.Request): void;
					public pauseRequests(): void;
					public constructor();
					public runRequest(param0: com.bumptech.glide.request.Request): void;
					public clearRequests(): void;
					public restartRequests(): void;
					public isPaused(): boolean;
					public resumeRequests(): void;
				}
			}
		}
	}
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./com.bumptech.glide.RequestManager.d.ts" />
/// <reference path="./com.bumptech.glide.manager.ActivityFragmentLifecycle.d.ts" />
/// <reference path="./com.bumptech.glide.manager.RequestManagerTreeNode.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class SupportRequestManagerFragment {
					public constructor(param0: com.bumptech.glide.manager.ActivityFragmentLifecycle);
					public setRequestManager(param0: com.bumptech.glide.RequestManager): void;
					public getDescendantRequestManagerFragments(): javautilSet;
					public onStart(): void;
					public onAttach(param0: androidappActivity): void;
					public getRequestManager(): com.bumptech.glide.RequestManager;
					public constructor();
					public onDetach(): void;
					public onStop(): void;
					public onDestroy(): void;
					public getRequestManagerTreeNode(): com.bumptech.glide.manager.RequestManagerTreeNode;
					public onLowMemory(): void;
				}
				export module SupportRequestManagerFragment {
					export class SupportFragmentRequestManagerTreeNode {
						public getDescendants(): javautilSet;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.bumptech.glide.Glide.d.ts" />
/// <reference path="./com.bumptech.glide.GlideBuilder.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module module {
				export class GlideModule {
					/**
					 * Constructs a new instance of the com.bumptech.glide.module.GlideModule interface with the provided implementation.
					 */
					public constructor(implementation: {
						applyOptions(param0: androidcontentContext, param1: com.bumptech.glide.GlideBuilder): void;
						registerComponents(param0: androidcontentContext, param1: com.bumptech.glide.Glide): void;
					});
					public applyOptions(param0: androidcontentContext, param1: com.bumptech.glide.GlideBuilder): void;
					public registerComponents(param0: androidcontentContext, param1: com.bumptech.glide.Glide): void;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module module {
				export class ManifestParser {
					public constructor(param0: androidcontentContext);
					public parse(): javautilList;
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.Encoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceDecoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceEncoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ModelLoader.d.ts" />
/// <reference path="./com.bumptech.glide.load.resource.transcode.ResourceTranscoder.d.ts" />
/// <reference path="./com.bumptech.glide.provider.LoadProvider.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module provider {
				export class ChildLoadProvider {
					public getModelLoader(): com.bumptech.glide.load.model.ModelLoader;
					public setEncoder(param0: com.bumptech.glide.load.ResourceEncoder): void;
					public setSourceEncoder(param0: com.bumptech.glide.load.Encoder): void;
					public getSourceDecoder(): com.bumptech.glide.load.ResourceDecoder;
					public setCacheDecoder(param0: com.bumptech.glide.load.ResourceDecoder): void;
					public setSourceDecoder(param0: com.bumptech.glide.load.ResourceDecoder): void;
					public getCacheDecoder(): com.bumptech.glide.load.ResourceDecoder;
					public setTranscoder(param0: com.bumptech.glide.load.resource.transcode.ResourceTranscoder): void;
					public getSourceEncoder(): com.bumptech.glide.load.Encoder;
					public clone(): com.bumptech.glide.provider.ChildLoadProvider;
					public getEncoder(): com.bumptech.glide.load.ResourceEncoder;
					public getTranscoder(): com.bumptech.glide.load.resource.transcode.ResourceTranscoder;
					public constructor(param0: com.bumptech.glide.provider.LoadProvider);
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.Encoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceDecoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceEncoder.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module provider {
				export class DataLoadProvider {
					/**
					 * Constructs a new instance of the com.bumptech.glide.provider.DataLoadProvider interface with the provided implementation.
					 */
					public constructor(implementation: {
						getCacheDecoder(): com.bumptech.glide.load.ResourceDecoder;
						getSourceDecoder(): com.bumptech.glide.load.ResourceDecoder;
						getSourceEncoder(): com.bumptech.glide.load.Encoder;
						getEncoder(): com.bumptech.glide.load.ResourceEncoder;
					});
					public getSourceEncoder(): com.bumptech.glide.load.Encoder;
					public getEncoder(): com.bumptech.glide.load.ResourceEncoder;
					public getSourceDecoder(): com.bumptech.glide.load.ResourceDecoder;
					public getCacheDecoder(): com.bumptech.glide.load.ResourceDecoder;
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.provider.DataLoadProvider.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module provider {
				export class DataLoadProviderRegistry {
					public register(param0: javalangClass, param1: javalangClass, param2: com.bumptech.glide.provider.DataLoadProvider): void;
					public get(param0: javalangClass, param1: javalangClass): com.bumptech.glide.provider.DataLoadProvider;
					public constructor();
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.Encoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceDecoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceEncoder.d.ts" />
/// <reference path="./com.bumptech.glide.provider.DataLoadProvider.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module provider {
				export class EmptyDataLoadProvider {
					public static get(): com.bumptech.glide.provider.DataLoadProvider;
					public getSourceEncoder(): com.bumptech.glide.load.Encoder;
					public getEncoder(): com.bumptech.glide.load.ResourceEncoder;
					public constructor();
					public getSourceDecoder(): com.bumptech.glide.load.ResourceDecoder;
					public getCacheDecoder(): com.bumptech.glide.load.ResourceDecoder;
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.Encoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceDecoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceEncoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ModelLoader.d.ts" />
/// <reference path="./com.bumptech.glide.load.resource.transcode.ResourceTranscoder.d.ts" />
/// <reference path="./com.bumptech.glide.provider.DataLoadProvider.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module provider {
				export class FixedLoadProvider {
					public getModelLoader(): com.bumptech.glide.load.model.ModelLoader;
					public getSourceEncoder(): com.bumptech.glide.load.Encoder;
					public getEncoder(): com.bumptech.glide.load.ResourceEncoder;
					public constructor(param0: com.bumptech.glide.load.model.ModelLoader, param1: com.bumptech.glide.load.resource.transcode.ResourceTranscoder, param2: com.bumptech.glide.provider.DataLoadProvider);
					public getTranscoder(): com.bumptech.glide.load.resource.transcode.ResourceTranscoder;
					public getSourceDecoder(): com.bumptech.glide.load.ResourceDecoder;
					public getCacheDecoder(): com.bumptech.glide.load.ResourceDecoder;
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.Encoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceDecoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.ResourceEncoder.d.ts" />
/// <reference path="./com.bumptech.glide.load.model.ModelLoader.d.ts" />
/// <reference path="./com.bumptech.glide.load.resource.transcode.ResourceTranscoder.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module provider {
				export class LoadProvider {
					/**
					 * Constructs a new instance of the com.bumptech.glide.provider.LoadProvider interface with the provided implementation.
					 */
					public constructor(implementation: {
						getModelLoader(): com.bumptech.glide.load.model.ModelLoader;
						getTranscoder(): com.bumptech.glide.load.resource.transcode.ResourceTranscoder;
						getCacheDecoder(): com.bumptech.glide.load.ResourceDecoder;
						getSourceDecoder(): com.bumptech.glide.load.ResourceDecoder;
						getSourceEncoder(): com.bumptech.glide.load.Encoder;
						getEncoder(): com.bumptech.glide.load.ResourceEncoder;
					});
					public getModelLoader(): com.bumptech.glide.load.model.ModelLoader;
					public getSourceEncoder(): com.bumptech.glide.load.Encoder;
					public getEncoder(): com.bumptech.glide.load.ResourceEncoder;
					public getTranscoder(): com.bumptech.glide.load.resource.transcode.ResourceTranscoder;
					public getSourceDecoder(): com.bumptech.glide.load.ResourceDecoder;
					public getCacheDecoder(): com.bumptech.glide.load.ResourceDecoder;
				}
			}
		}
	}
}

/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./com.bumptech.glide.request.Request.d.ts" />
/// <reference path="./com.bumptech.glide.request.animation.GlideAnimation.d.ts" />
/// <reference path="./com.bumptech.glide.request.target.SizeReadyCallback.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class FutureTarget {
					/**
					 * Constructs a new instance of the com.bumptech.glide.request.FutureTarget interface with the provided implementation.
					 */
					public constructor(implementation: {
						clear(): void;
						onLoadStarted(param0: androidgraphicsdrawableDrawable): void;
						onLoadFailed(param0: javalangException, param1: androidgraphicsdrawableDrawable): void;
						onResourceReady(param0: javalangObject, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
						onLoadCleared(param0: androidgraphicsdrawableDrawable): void;
						getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						setRequest(param0: com.bumptech.glide.request.Request): void;
						getRequest(): com.bumptech.glide.request.Request;
						onStart(): void;
						onStop(): void;
						onDestroy(): void;
					});
					public static SIZE_ORIGINAL: number;
					public onStart(): void;
					public onLoadCleared(param0: androidgraphicsdrawableDrawable): void;
					public onResourceReady(param0: javalangObject, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
					public getRequest(): com.bumptech.glide.request.Request;
					public clear(): void;
					public setRequest(param0: com.bumptech.glide.request.Request): void;
					public onLoadStarted(param0: androidgraphicsdrawableDrawable): void;
					public onStop(): void;
					public onDestroy(): void;
					public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public onLoadFailed(param0: javalangException, param1: androidgraphicsdrawableDrawable): void;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./com.bumptech.glide.Priority.d.ts" />
/// <reference path="./com.bumptech.glide.load.Key.d.ts" />
/// <reference path="./com.bumptech.glide.load.Transformation.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.DiskCacheStrategy.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.Engine.d.ts" />
/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./com.bumptech.glide.provider.LoadProvider.d.ts" />
/// <reference path="./com.bumptech.glide.request.RequestCoordinator.d.ts" />
/// <reference path="./com.bumptech.glide.request.RequestListener.d.ts" />
/// <reference path="./com.bumptech.glide.request.animation.GlideAnimationFactory.d.ts" />
/// <reference path="./com.bumptech.glide.request.target.Target.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class GenericRequest {
					public begin(): void;
					public recycle(): void;
					public isCancelled(): boolean;
					public isPaused(): boolean;
					public isComplete(): boolean;
					public onSizeReady(param0: number, param1: number): void;
					public isFailed(): boolean;
					public onException(param0: javalangException): void;
					public isResourceSet(): boolean;
					public onResourceReady(param0: com.bumptech.glide.load.engine.Resource): void;
					public pause(): void;
					public clear(): void;
					public isRunning(): boolean;
					public static obtain(param0: com.bumptech.glide.provider.LoadProvider, param1: javalangObject, param2: com.bumptech.glide.load.Key, param3: androidcontentContext, param4: com.bumptech.glide.Priority, param5: com.bumptech.glide.request.target.Target, param6: number, param7: androidgraphicsdrawableDrawable, param8: number, param9: androidgraphicsdrawableDrawable, param10: number, param11: androidgraphicsdrawableDrawable, param12: number, param13: com.bumptech.glide.request.RequestListener, param14: com.bumptech.glide.request.RequestCoordinator, param15: com.bumptech.glide.load.engine.Engine, param16: com.bumptech.glide.load.Transformation, param17: javalangClass, param18: boolean, param19: com.bumptech.glide.request.animation.GlideAnimationFactory, param20: number, param21: number, param22: com.bumptech.glide.load.engine.DiskCacheStrategy): com.bumptech.glide.request.GenericRequest;
				}
				export module GenericRequest {
					export class Status {
						public static PENDING: com.bumptech.glide.request.GenericRequest.Status;
						public static RUNNING: com.bumptech.glide.request.GenericRequest.Status;
						public static WAITING_FOR_SIZE: com.bumptech.glide.request.GenericRequest.Status;
						public static COMPLETE: com.bumptech.glide.request.GenericRequest.Status;
						public static FAILED: com.bumptech.glide.request.GenericRequest.Status;
						public static CANCELLED: com.bumptech.glide.request.GenericRequest.Status;
						public static CLEARED: com.bumptech.glide.request.GenericRequest.Status;
						public static PAUSED: com.bumptech.glide.request.GenericRequest.Status;
						public static values(): native.Array<com.bumptech.glide.request.GenericRequest.Status>;
						public static valueOf(param0: string): com.bumptech.glide.request.GenericRequest.Status;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class Request {
					/**
					 * Constructs a new instance of the com.bumptech.glide.request.Request interface with the provided implementation.
					 */
					public constructor(implementation: {
						begin(): void;
						pause(): void;
						clear(): void;
						isPaused(): boolean;
						isRunning(): boolean;
						isComplete(): boolean;
						isResourceSet(): boolean;
						isCancelled(): boolean;
						isFailed(): boolean;
						recycle(): void;
					});
					public isFailed(): boolean;
					public begin(): void;
					public isResourceSet(): boolean;
					public recycle(): void;
					public pause(): void;
					public isCancelled(): boolean;
					public clear(): void;
					public isRunning(): boolean;
					public isPaused(): boolean;
					public isComplete(): boolean;
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.request.Request.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class RequestCoordinator {
					/**
					 * Constructs a new instance of the com.bumptech.glide.request.RequestCoordinator interface with the provided implementation.
					 */
					public constructor(implementation: {
						canSetImage(param0: com.bumptech.glide.request.Request): boolean;
						canNotifyStatusChanged(param0: com.bumptech.glide.request.Request): boolean;
						isAnyResourceSet(): boolean;
						onRequestSuccess(param0: com.bumptech.glide.request.Request): void;
					});
					public isAnyResourceSet(): boolean;
					public onRequestSuccess(param0: com.bumptech.glide.request.Request): void;
					public canNotifyStatusChanged(param0: com.bumptech.glide.request.Request): boolean;
					public canSetImage(param0: com.bumptech.glide.request.Request): boolean;
				}
			}
		}
	}
}

/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./com.bumptech.glide.request.Request.d.ts" />
/// <reference path="./com.bumptech.glide.request.animation.GlideAnimation.d.ts" />
/// <reference path="./com.bumptech.glide.request.target.SizeReadyCallback.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class RequestFutureTarget {
					public get(): javalangObject;
					public get(param0: number, param1: javautilconcurrentTimeUnit): javalangObject;
					public onLoadCleared(param0: androidgraphicsdrawableDrawable): void;
					public isCancelled(): boolean;
					public run(): void;
					public onResourceReady(param0: javalangObject, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
					public setRequest(param0: com.bumptech.glide.request.Request): void;
					public onLoadStarted(param0: androidgraphicsdrawableDrawable): void;
					public onDestroy(): void;
					public cancel(param0: boolean): boolean;
					public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public onLoadFailed(param0: javalangException, param1: androidgraphicsdrawableDrawable): void;
					public onStart(): void;
					public isDone(): boolean;
					public getRequest(): com.bumptech.glide.request.Request;
					public clear(): void;
					public onStop(): void;
					public constructor(param0: androidosHandler, param1: number, param2: number);
				}
				export module RequestFutureTarget {
					export class Waiter {
						public notifyAll(param0: javalangObject): void;
						public waitForTimeout(param0: javalangObject, param1: number): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.request.target.Target.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class RequestListener {
					/**
					 * Constructs a new instance of the com.bumptech.glide.request.RequestListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						onException(param0: javalangException, param1: javalangObject, param2: com.bumptech.glide.request.target.Target, param3: boolean): boolean;
						onResourceReady(param0: javalangObject, param1: javalangObject, param2: com.bumptech.glide.request.target.Target, param3: boolean, param4: boolean): boolean;
					});
					public onException(param0: javalangException, param1: javalangObject, param2: com.bumptech.glide.request.target.Target, param3: boolean): boolean;
					public onResourceReady(param0: javalangObject, param1: javalangObject, param2: com.bumptech.glide.request.target.Target, param3: boolean, param4: boolean): boolean;
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.load.engine.Resource.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class ResourceCallback {
					/**
					 * Constructs a new instance of the com.bumptech.glide.request.ResourceCallback interface with the provided implementation.
					 */
					public constructor(implementation: {
						onResourceReady(param0: com.bumptech.glide.load.engine.Resource): void;
						onException(param0: javalangException): void;
					});
					public onException(param0: javalangException): void;
					public onResourceReady(param0: com.bumptech.glide.load.engine.Resource): void;
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.request.Request.d.ts" />
/// <reference path="./com.bumptech.glide.request.RequestCoordinator.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class ThumbnailRequestCoordinator {
					public begin(): void;
					public isAnyResourceSet(): boolean;
					public recycle(): void;
					public isCancelled(): boolean;
					public setRequests(param0: com.bumptech.glide.request.Request, param1: com.bumptech.glide.request.Request): void;
					public onRequestSuccess(param0: com.bumptech.glide.request.Request): void;
					public isPaused(): boolean;
					public isComplete(): boolean;
					public canNotifyStatusChanged(param0: com.bumptech.glide.request.Request): boolean;
					public canSetImage(param0: com.bumptech.glide.request.Request): boolean;
					public isFailed(): boolean;
					public isResourceSet(): boolean;
					public constructor(param0: com.bumptech.glide.request.RequestCoordinator);
					public constructor();
					public pause(): void;
					public clear(): void;
					public isRunning(): boolean;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.animation.Animation.d.ts" />
/// <reference path="./com.bumptech.glide.request.animation.GlideAnimation.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module animation {
					export class DrawableCrossFadeFactory {
						public constructor();
						public constructor(param0: androidviewanimationAnimation, param1: number);
						public build(param0: boolean, param1: boolean): com.bumptech.glide.request.animation.GlideAnimation;
						public constructor(param0: number);
						public constructor(param0: androidcontentContext, param1: number, param2: number);
					}
					export module DrawableCrossFadeFactory {
						export class DefaultAnimationFactory {
							public build(): androidviewanimationAnimation;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./com.bumptech.glide.request.animation.GlideAnimation.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module animation {
					export class DrawableCrossFadeViewAnimation {
						public constructor(param0: com.bumptech.glide.request.animation.GlideAnimation, param1: number);
						public animate(param0: javalangObject, param1: com.bumptech.glide.request.animation.GlideAnimation.ViewAdapter): boolean;
						public animate(param0: androidgraphicsdrawableDrawable, param1: com.bumptech.glide.request.animation.GlideAnimation.ViewAdapter): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module animation {
					export class GlideAnimation {
						/**
						 * Constructs a new instance of the com.bumptech.glide.request.animation.GlideAnimation interface with the provided implementation.
						 */
						public constructor(implementation: {
							animate(param0: javalangObject, param1: com.bumptech.glide.request.animation.GlideAnimation.ViewAdapter): boolean;
						});
						public animate(param0: javalangObject, param1: com.bumptech.glide.request.animation.GlideAnimation.ViewAdapter): boolean;
					}
					export module GlideAnimation {
						export class ViewAdapter {
							/**
							 * Constructs a new instance of the com.bumptech.glide.request.animation.GlideAnimation$ViewAdapter interface with the provided implementation.
							 */
							public constructor(implementation: {
								getView(): androidviewView;
								getCurrentDrawable(): androidgraphicsdrawableDrawable;
								setDrawable(param0: androidgraphicsdrawableDrawable): void;
							});
							public setDrawable(param0: androidgraphicsdrawableDrawable): void;
							public getView(): androidviewView;
							public getCurrentDrawable(): androidgraphicsdrawableDrawable;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.request.animation.GlideAnimation.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module animation {
					export class GlideAnimationFactory {
						/**
						 * Constructs a new instance of the com.bumptech.glide.request.animation.GlideAnimationFactory interface with the provided implementation.
						 */
						public constructor(implementation: {
							build(param0: boolean, param1: boolean): com.bumptech.glide.request.animation.GlideAnimation;
						});
						public build(param0: boolean, param1: boolean): com.bumptech.glide.request.animation.GlideAnimation;
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.request.animation.GlideAnimation.d.ts" />
/// <reference path="./com.bumptech.glide.request.animation.GlideAnimationFactory.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module animation {
					export class NoAnimation {
						public constructor();
						public static getFactory(): com.bumptech.glide.request.animation.GlideAnimationFactory;
						public animate(param0: javalangObject, param1: com.bumptech.glide.request.animation.GlideAnimation.ViewAdapter): boolean;
						public static get(): com.bumptech.glide.request.animation.GlideAnimation;
					}
					export module NoAnimation {
						export class NoAnimationFactory {
							public constructor();
							public build(param0: boolean, param1: boolean): com.bumptech.glide.request.animation.GlideAnimation;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.view.animation.Animation.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module animation {
					export class ViewAnimation {
						public animate(param0: javalangObject, param1: com.bumptech.glide.request.animation.GlideAnimation.ViewAdapter): boolean;
					}
					export module ViewAnimation {
						export class AnimationFactory {
							/**
							 * Constructs a new instance of the com.bumptech.glide.request.animation.ViewAnimation$AnimationFactory interface with the provided implementation.
							 */
							public constructor(implementation: {
								build(): androidviewanimationAnimation;
							});
							public build(): androidviewanimationAnimation;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.animation.Animation.d.ts" />
/// <reference path="./com.bumptech.glide.request.animation.GlideAnimation.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module animation {
					export class ViewAnimationFactory {
						public build(param0: boolean, param1: boolean): com.bumptech.glide.request.animation.GlideAnimation;
						public constructor(param0: androidcontentContext, param1: number);
						public constructor(param0: androidviewanimationAnimation);
					}
					export module ViewAnimationFactory {
						export class ConcreteAnimationFactory {
							public constructor(param0: androidviewanimationAnimation);
							public build(): androidviewanimationAnimation;
						}
						export class ResourceAnimationFactory {
							public constructor(param0: androidcontentContext, param1: number);
							public build(): androidviewanimationAnimation;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module animation {
					export class ViewPropertyAnimation {
						public constructor(param0: com.bumptech.glide.request.animation.ViewPropertyAnimation.Animator);
						public animate(param0: javalangObject, param1: com.bumptech.glide.request.animation.GlideAnimation.ViewAdapter): boolean;
					}
					export module ViewPropertyAnimation {
						export class Animator {
							/**
							 * Constructs a new instance of the com.bumptech.glide.request.animation.ViewPropertyAnimation$Animator interface with the provided implementation.
							 */
							public constructor(implementation: {
								animate(param0: androidviewView): void;
							});
							public animate(param0: androidviewView): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.bumptech.glide.request.animation.GlideAnimation.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module animation {
					export class ViewPropertyAnimationFactory {
						public build(param0: boolean, param1: boolean): com.bumptech.glide.request.animation.GlideAnimation;
						public constructor(param0: com.bumptech.glide.request.animation.ViewPropertyAnimation.Animator);
					}
				}
			}
		}
	}
}

import androidwidgetRemoteViews = android.widget.RemoteViews;
import androidcontentComponentName = android.content.ComponentName;
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.widget.RemoteViews.d.ts" />
/// <reference path="./com.bumptech.glide.request.Request.d.ts" />
/// <reference path="./com.bumptech.glide.request.animation.GlideAnimation.d.ts" />
/// <reference path="./com.bumptech.glide.request.target.SizeReadyCallback.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class AppWidgetTarget extends com.bumptech.glide.request.target.SimpleTarget {
						public constructor();
						public onResourceReady(param0: javalangObject, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
						public onLoadFailed(param0: javalangException, param1: androidgraphicsdrawableDrawable): void;
						public onLoadCleared(param0: androidgraphicsdrawableDrawable): void;
						public constructor(param0: androidcontentContext, param1: androidwidgetRemoteViews, param2: number, param3: number, param4: number, param5: native.Array<number>);
						public onResourceReady(param0: androidgraphicsBitmap, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public constructor(param0: androidcontentContext, param1: androidwidgetRemoteViews, param2: number, param3: native.Array<number>);
						public constructor(param0: androidcontentContext, param1: androidwidgetRemoteViews, param2: number, param3: number, param4: number, param5: androidcontentComponentName);
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public onLoadStarted(param0: androidgraphicsdrawableDrawable): void;
						public constructor(param0: number, param1: number);
						public constructor(param0: androidcontentContext, param1: androidwidgetRemoteViews, param2: number, param3: androidcontentComponentName);
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./com.bumptech.glide.request.Request.d.ts" />
/// <reference path="./com.bumptech.glide.request.animation.GlideAnimation.d.ts" />
/// <reference path="./com.bumptech.glide.request.target.SizeReadyCallback.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export abstract class BaseTarget {
						public constructor();
						public onResourceReady(param0: javalangObject, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
						public onDestroy(): void;
						public onLoadFailed(param0: javalangException, param1: androidgraphicsdrawableDrawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public onLoadCleared(param0: androidgraphicsdrawableDrawable): void;
						public onLoadStarted(param0: androidgraphicsdrawableDrawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public onStop(): void;
						public onStart(): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.ImageView.d.ts" />
/// <reference path="./com.bumptech.glide.request.Request.d.ts" />
/// <reference path="./com.bumptech.glide.request.animation.GlideAnimation.d.ts" />
/// <reference path="./com.bumptech.glide.request.target.SizeReadyCallback.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class BitmapImageViewTarget extends com.bumptech.glide.request.target.ImageViewTarget {
						public constructor();
						public onResourceReady(param0: javalangObject, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
						public onLoadFailed(param0: javalangException, param1: androidgraphicsdrawableDrawable): void;
						public onLoadCleared(param0: androidgraphicsdrawableDrawable): void;
						public setDrawable(param0: androidgraphicsdrawableDrawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public getCurrentDrawable(): androidgraphicsdrawableDrawable;
						public setResource(param0: androidgraphicsBitmap): void;
						public setResource(param0: javalangObject): void;
						public getView(): androidviewView;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public constructor(param0: androidviewView);
						public onLoadStarted(param0: androidgraphicsdrawableDrawable): void;
						public constructor(param0: androidwidgetImageView);
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.ImageView.d.ts" />
/// <reference path="./com.bumptech.glide.request.Request.d.ts" />
/// <reference path="./com.bumptech.glide.request.animation.GlideAnimation.d.ts" />
/// <reference path="./com.bumptech.glide.request.target.SizeReadyCallback.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class DrawableImageViewTarget extends com.bumptech.glide.request.target.ImageViewTarget {
						public constructor();
						public onResourceReady(param0: javalangObject, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
						public onLoadFailed(param0: javalangException, param1: androidgraphicsdrawableDrawable): void;
						public onLoadCleared(param0: androidgraphicsdrawableDrawable): void;
						public setDrawable(param0: androidgraphicsdrawableDrawable): void;
						public setResource(param0: androidgraphicsdrawableDrawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public getCurrentDrawable(): androidgraphicsdrawableDrawable;
						public setResource(param0: javalangObject): void;
						public getView(): androidviewView;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public constructor(param0: androidviewView);
						public onLoadStarted(param0: androidgraphicsdrawableDrawable): void;
						public constructor(param0: androidwidgetImageView);
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.ImageView.d.ts" />
/// <reference path="./com.bumptech.glide.load.resource.drawable.GlideDrawable.d.ts" />
/// <reference path="./com.bumptech.glide.request.Request.d.ts" />
/// <reference path="./com.bumptech.glide.request.animation.GlideAnimation.d.ts" />
/// <reference path="./com.bumptech.glide.request.target.SizeReadyCallback.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class GlideDrawableImageViewTarget extends com.bumptech.glide.request.target.ImageViewTarget {
						public constructor();
						public onResourceReady(param0: javalangObject, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
						public onLoadFailed(param0: javalangException, param1: androidgraphicsdrawableDrawable): void;
						public onLoadCleared(param0: androidgraphicsdrawableDrawable): void;
						public constructor(param0: androidwidgetImageView, param1: number);
						public setDrawable(param0: androidgraphicsdrawableDrawable): void;
						public setResource(param0: com.bumptech.glide.load.resource.drawable.GlideDrawable): void;
						public onStop(): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public getCurrentDrawable(): androidgraphicsdrawableDrawable;
						public setResource(param0: javalangObject): void;
						public getView(): androidviewView;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public constructor(param0: androidviewView);
						public onLoadStarted(param0: androidgraphicsdrawableDrawable): void;
						public constructor(param0: androidwidgetImageView);
						public onResourceReady(param0: com.bumptech.glide.load.resource.drawable.GlideDrawable, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
						public onStart(): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.ImageView.d.ts" />
/// <reference path="./com.bumptech.glide.request.Request.d.ts" />
/// <reference path="./com.bumptech.glide.request.animation.GlideAnimation.d.ts" />
/// <reference path="./com.bumptech.glide.request.target.SizeReadyCallback.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export abstract class ImageViewTarget extends com.bumptech.glide.request.target.ViewTarget implements com.bumptech.glide.request.animation.GlideAnimation.ViewAdapter {
						public constructor();
						public onResourceReady(param0: javalangObject, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
						public onLoadFailed(param0: javalangException, param1: androidgraphicsdrawableDrawable): void;
						public onLoadCleared(param0: androidgraphicsdrawableDrawable): void;
						public setDrawable(param0: androidgraphicsdrawableDrawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public getCurrentDrawable(): androidgraphicsdrawableDrawable;
						public setResource(param0: javalangObject): void;
						public getView(): androidviewView;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public constructor(param0: androidviewView);
						public onLoadStarted(param0: androidgraphicsdrawableDrawable): void;
						public constructor(param0: androidwidgetImageView);
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.widget.ImageView.d.ts" />
/// <reference path="./com.bumptech.glide.request.target.Target.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class ImageViewTargetFactory {
						public constructor();
						public buildTarget(param0: androidwidgetImageView, param1: javalangClass): com.bumptech.glide.request.target.Target;
					}
				}
			}
		}
	}
}

import androidappNotification = android.app.Notification;
/// <reference path="./android.app.Notification.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.widget.RemoteViews.d.ts" />
/// <reference path="./com.bumptech.glide.request.Request.d.ts" />
/// <reference path="./com.bumptech.glide.request.animation.GlideAnimation.d.ts" />
/// <reference path="./com.bumptech.glide.request.target.SizeReadyCallback.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class NotificationTarget extends com.bumptech.glide.request.target.SimpleTarget {
						public constructor(param0: androidcontentContext, param1: androidwidgetRemoteViews, param2: number, param3: number, param4: number, param5: androidappNotification, param6: number);
						public constructor();
						public onResourceReady(param0: javalangObject, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
						public constructor(param0: androidcontentContext, param1: androidwidgetRemoteViews, param2: number, param3: androidappNotification, param4: number);
						public onLoadFailed(param0: javalangException, param1: androidgraphicsdrawableDrawable): void;
						public onLoadCleared(param0: androidgraphicsdrawableDrawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public onResourceReady(param0: androidgraphicsBitmap, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
						public onLoadStarted(param0: androidgraphicsdrawableDrawable): void;
						public constructor(param0: number, param1: number);
						public getRequest(): com.bumptech.glide.request.Request;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./com.bumptech.glide.request.Request.d.ts" />
/// <reference path="./com.bumptech.glide.request.animation.GlideAnimation.d.ts" />
/// <reference path="./com.bumptech.glide.request.target.SizeReadyCallback.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class PreloadTarget extends com.bumptech.glide.request.target.SimpleTarget {
						public static obtain(param0: number, param1: number): com.bumptech.glide.request.target.PreloadTarget;
						public onResourceReady(param0: javalangObject, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
						public onLoadFailed(param0: javalangException, param1: androidgraphicsdrawableDrawable): void;
						public onLoadCleared(param0: androidgraphicsdrawableDrawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public onLoadStarted(param0: androidgraphicsdrawableDrawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./com.bumptech.glide.request.Request.d.ts" />
/// <reference path="./com.bumptech.glide.request.animation.GlideAnimation.d.ts" />
/// <reference path="./com.bumptech.glide.request.target.SizeReadyCallback.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export abstract class SimpleTarget extends com.bumptech.glide.request.target.BaseTarget {
						public constructor();
						public onResourceReady(param0: javalangObject, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
						public onLoadFailed(param0: javalangException, param1: androidgraphicsdrawableDrawable): void;
						public onLoadCleared(param0: androidgraphicsdrawableDrawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public onLoadStarted(param0: androidgraphicsdrawableDrawable): void;
						public constructor(param0: number, param1: number);
						public getRequest(): com.bumptech.glide.request.Request;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class SizeReadyCallback {
						/**
						 * Constructs a new instance of the com.bumptech.glide.request.target.SizeReadyCallback interface with the provided implementation.
						 */
						public constructor(implementation: {
							onSizeReady(param0: number, param1: number): void;
						});
						public onSizeReady(param0: number, param1: number): void;
					}
				}
			}
		}
	}
}

import androidgraphicsdrawableDrawableCallback = android.graphics.drawable.Drawable.Callback;
import androidgraphicsPorterDuffMode = android.graphics.PorterDuff.Mode;
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./com.bumptech.glide.load.resource.drawable.GlideDrawable.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class SquaringDrawable extends com.bumptech.glide.load.resource.drawable.GlideDrawable {
						public setColorFilter(param0: number, param1: androidgraphicsPorterDuffMode): void;
						public draw(param0: androidgraphicsCanvas): void;
						public getChangingConfigurations(): number;
						public mutate(): androidgraphicsdrawableDrawable;
						public clearColorFilter(): void;
						public getMinimumWidth(): number;
						public getAlpha(): number;
						public constructor(param0: com.bumptech.glide.load.resource.drawable.GlideDrawable, param1: number);
						public isRunning(): boolean;
						public setVisible(param0: boolean, param1: boolean): boolean;
						public setColorFilter(param0: androidgraphicsColorFilter): void;
						public setFilterBitmap(param0: boolean): void;
						public getCurrent(): androidgraphicsdrawableDrawable;
						public getConstantState(): androidgraphicsdrawableDrawableConstantState;
						public getMinimumHeight(): number;
						public setDither(param0: boolean): void;
						public getPadding(param0: androidgraphicsRect): boolean;
						public invalidateSelf(): void;
						public constructor();
						public getIntrinsicWidth(): number;
						public getIntrinsicHeight(): number;
						public setBounds(param0: number, param1: number, param2: number, param3: number): void;
						public getOpacity(): number;
						public setAlpha(param0: number): void;
						public stop(): void;
						public getCallback(): androidgraphicsdrawableDrawableCallback;
						public setChangingConfigurations(param0: number): void;
						public start(): void;
						public setBounds(param0: androidgraphicsRect): void;
						public scheduleSelf(param0: javalangRunnable, param1: number): void;
						public isAnimated(): boolean;
						public setLoopCount(param0: number): void;
						public unscheduleSelf(param0: javalangRunnable): void;
					}
					export module SquaringDrawable {
						export class State {
							public newDrawable(param0: androidcontentresResources): androidgraphicsdrawableDrawable;
							public newDrawable(): androidgraphicsdrawableDrawable;
							public getChangingConfigurations(): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./com.bumptech.glide.request.Request.d.ts" />
/// <reference path="./com.bumptech.glide.request.animation.GlideAnimation.d.ts" />
/// <reference path="./com.bumptech.glide.request.target.SizeReadyCallback.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class Target {
						/**
						 * Constructs a new instance of the com.bumptech.glide.request.target.Target interface with the provided implementation.
						 */
						public constructor(implementation: {
							onLoadStarted(param0: androidgraphicsdrawableDrawable): void;
							onLoadFailed(param0: javalangException, param1: androidgraphicsdrawableDrawable): void;
							onResourceReady(param0: javalangObject, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
							onLoadCleared(param0: androidgraphicsdrawableDrawable): void;
							getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
							setRequest(param0: com.bumptech.glide.request.Request): void;
							getRequest(): com.bumptech.glide.request.Request;
							onStart(): void;
							onStop(): void;
							onDestroy(): void;
						});
						public static SIZE_ORIGINAL: number;
						public onResourceReady(param0: javalangObject, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
						public onDestroy(): void;
						public onLoadFailed(param0: javalangException, param1: androidgraphicsdrawableDrawable): void;
						public onLoadCleared(param0: androidgraphicsdrawableDrawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public onLoadStarted(param0: androidgraphicsdrawableDrawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public onStop(): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onStart(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.bumptech.glide.request.Request.d.ts" />
/// <reference path="./com.bumptech.glide.request.animation.GlideAnimation.d.ts" />
/// <reference path="./com.bumptech.glide.request.target.SizeReadyCallback.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export abstract class ViewTarget extends com.bumptech.glide.request.target.BaseTarget {
						public view: androidviewView;
						public constructor();
						public onResourceReady(param0: javalangObject, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
						public getView(): androidviewView;
						public onLoadFailed(param0: javalangException, param1: androidgraphicsdrawableDrawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public onLoadCleared(param0: androidgraphicsdrawableDrawable): void;
						public constructor(param0: androidviewView);
						public onLoadStarted(param0: androidgraphicsdrawableDrawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public toString(): string;
						public static setTagId(param0: number): void;
					}
					export module ViewTarget {
						export class SizeDeterminer {
							public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
							public constructor(param0: androidviewView);
						}
						export module SizeDeterminer {
							export class SizeDeterminerLayoutListener {
								public onPreDraw(): boolean;
								public constructor(param0: com.bumptech.glide.request.target.ViewTarget.SizeDeterminer);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.bumptech.glide.load.Key.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module signature {
				export class ApplicationVersionSignature {
					public static obtain(param0: androidcontentContext): com.bumptech.glide.load.Key;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.security.MessageDigest.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module signature {
				export class EmptySignature {
					public updateDiskCacheKey(param0: javasecurityMessageDigest): void;
					public equals(param0: javalangObject): boolean;
					public static obtain(): com.bumptech.glide.signature.EmptySignature;
					public hashCode(): number;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.MessageDigest.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module signature {
				export class MediaStoreSignature {
					public updateDiskCacheKey(param0: javasecurityMessageDigest): void;
					public equals(param0: javalangObject): boolean;
					public hashCode(): number;
					public constructor(param0: string, param1: number, param2: number);
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.MessageDigest.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module signature {
				export class StringSignature {
					public updateDiskCacheKey(param0: javasecurityMessageDigest): void;
					public toString(): string;
					public constructor(param0: string);
					public equals(param0: javalangObject): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class ByteArrayPool {
					public getBytes(): native.Array<number>;
					public static get(): com.bumptech.glide.util.ByteArrayPool;
					public clear(): void;
					public releaseBytes(param0: native.Array<number>): boolean;
				}
			}
		}
	}
}

/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class ContentLengthInputStream {
					public available(): number;
					public read(): number;
					public read(param0: native.Array<number>, param1: number, param2: number): number;
					public static obtain(param0: javaioInputStream, param1: string): javaioInputStream;
					public static obtain(param0: javaioInputStream, param1: number): javaioInputStream;
					public read(param0: native.Array<number>): number;
				}
			}
		}
	}
}

import javaioIOException = java.io.IOException;
/// <reference path="./java.io.IOException.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class ExceptionCatchingInputStream {
					public available(): number;
					public read(param0: native.Array<number>, param1: number, param2: number): number;
					public read(): number;
					public reset(): void;
					public getException(): javaioIOException;
					public markSupported(): boolean;
					public read(param0: native.Array<number>): number;
					public close(): void;
					public skip(param0: number): number;
					public release(): void;
					public static obtain(param0: javaioInputStream): com.bumptech.glide.util.ExceptionCatchingInputStream;
					public mark(param0: number): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class FixedPreloadSizeProvider {
					public getPreloadSize(param0: javalangObject, param1: number, param2: number): native.Array<number>;
					public constructor(param0: number, param1: number);
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class LogTime {
					public static getLogTime(): number;
					public static getElapsedMillis(param0: number): number;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class LruCache {
					public contains(param0: javalangObject): boolean;
					public getSize(param0: javalangObject): number;
					public getCurrentSize(): number;
					public setSizeMultiplier(param0: number): void;
					public remove(param0: javalangObject): javalangObject;
					public clearMemory(): void;
					public onItemEvicted(param0: javalangObject, param1: javalangObject): void;
					public getMaxSize(): number;
					public put(param0: javalangObject, param1: javalangObject): javalangObject;
					public constructor(param0: number);
					public trimToSize(param0: number): void;
					public get(param0: javalangObject): javalangObject;
				}
			}
		}
	}
}

/// <reference path="./java.io.InputStream.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class MarkEnforcingInputStream {
					public constructor(param0: javaioInputStream);
					public available(): number;
					public read(): number;
					public read(param0: native.Array<number>, param1: number, param2: number): number;
					public reset(): void;
					public skip(param0: number): number;
					public mark(param0: number): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class MultiClassKey {
					public toString(): string;
					public constructor();
					public equals(param0: javalangObject): boolean;
					public constructor(param0: javalangClass, param1: javalangClass);
					public set(param0: javalangClass, param1: javalangClass): void;
					public hashCode(): number;
				}
			}
		}
	}
}

import javautilQueue = java.util.Queue;
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Queue.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class Util {
					public static createQueue(param0: number): javautilQueue;
					public static sha256BytesToHex(param0: native.Array<number>): string;
					public static getSnapshot(param0: javautilCollection): javautilList;
					public static getSize(param0: androidgraphicsBitmap): number;
					public static assertBackgroundThread(): void;
					public static assertMainThread(): void;
					public static sha1BytesToHex(param0: native.Array<number>): string;
					public static isOnBackgroundThread(): boolean;
					public static isOnMainThread(): boolean;
					public static getBitmapByteSize(param0: androidgraphicsBitmap): number;
					public static isValidDimensions(param0: number, param1: number): boolean;
					public static getBitmapByteSize(param0: number, param1: number, param2: androidgraphicsBitmapConfig): number;
				}
			}
		}
	}
}

/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.bumptech.glide.request.Request.d.ts" />
/// <reference path="./com.bumptech.glide.request.animation.GlideAnimation.d.ts" />
/// <reference path="./com.bumptech.glide.request.target.SizeReadyCallback.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class ViewPreloadSizeProvider {
					public constructor();
					public getPreloadSize(param0: javalangObject, param1: number, param2: number): native.Array<number>;
					public constructor(param0: androidviewView);
					public onSizeReady(param0: number, param1: number): void;
					public setView(param0: androidviewView): void;
				}
				export module ViewPreloadSizeProvider {
					export class SizeViewTarget extends com.bumptech.glide.request.target.ViewTarget {
						public constructor();
						public onResourceReady(param0: javalangObject, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
						public onLoadFailed(param0: javalangException, param1: androidgraphicsdrawableDrawable): void;
						public onLoadCleared(param0: androidgraphicsdrawableDrawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public constructor(param0: androidviewView);
						public constructor(param0: androidviewView, param1: com.bumptech.glide.request.target.SizeReadyCallback);
						public onLoadStarted(param0: androidgraphicsdrawableDrawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

