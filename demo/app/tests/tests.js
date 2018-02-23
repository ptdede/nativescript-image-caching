var ImageCache = require("nativescript-image-cache").ImageCache;
var imageCache = new ImageCache();

describe("greet function", function() {
    it("exists", function() {
        expect(imageCache.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(imageCache.greet()).toEqual("Hello, NS");
    });
});