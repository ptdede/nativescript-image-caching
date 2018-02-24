
# Nativescript Image Caching

Image Caching that use Glide(v3) for android and SDWebImage(v4) for ios


## CAUTION!
this plugin is under development, i really appreciate pull request and contribution in this repo. Thanks!

inspired from nativescript-image-cache-it  </br>
they used Picasso rather than Glide.

## Installation

```javascript
tns plugin add nativescript-image-caching
```

## Usage

```javascript
  <ImageCache src="http://lorempixel.com/2000/2000/sports"
              width="100%"
              height="210"/>
```

## IMPORTANT FOR ANGULAR

inside your app module. insert:

```javascript
import { registerElement } from 'nativescript-angular/element-registry';
registerElement('ImageCache', () => require('nativescript-image-caching').ImageCache);
```

## API

| Property | Default | Description |
| --- | --- | --- |
| src | - | (required) link url of an image |
    
## License

MIT
