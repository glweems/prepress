
export const productImg = (sku, abr) => "/images/product/" + sku + "_" + abr + ".jpg";

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

export function setData(set, data) {
	set = data
};

export function fetchData(api, setter) {
	let productData = undefined;
	fetch(api)
		.then(response => {
			return response.json();
		})
		.then(data => {
			console.log(data)
			setData(data, setter)
		})
		.catch(err => {
			console.log('data not fetched');
		});
};


export const productListImg = (product) => productImg(product.sku, defaultProductColor(product.colors).abr)

export const productPath = "/product";

export const stylesApi = "/api/styles";

export const getProductApi = (sku) => '/api/product/' + sku;

export default {
	productImg, defaultProductColor, getProductApi, colorFromRoute, productFromSku, productListImg, productPath, fetchData, setData, stylesApi
}
