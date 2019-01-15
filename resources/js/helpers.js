export const productImg = (sku, abr) => "/api/images/product/" + sku + "_" + abr + ".jpg";

export function defaultProductColor(colors) {
	for (var i = 0; i < colors.length; i++) {
		if (colors[i].default) {
			return colors[i]
		}
	}
};

export function productFromSku(products, sku) {
	var i;
	for (var i = 0; i < products.length; i++) {
		if (products[i].sku == sku) {
			return products[i]
		}
	}
};

export function colorFromRoute(colors, abr) {
	var i;
	for (var i = 0; i < colors.length; i++) {
		if (colors[i].abr == abr) {
			return colors[i];
		}
	}
};

export const productListImg = (product) => productImg(product.sku, defaultProductColor(product.colors).abr)

export const productPath = "/product"

export const getProductApi = (sku) => '/api/product/' + sku;

export default {
	productImg, defaultProductColor, getProductApi, colorFromRoute, productFromSku, productListImg
}
