{
	"builds": [{
			"src": "*.html",
			"use": "@now/static"
		},
		{
			"src": "*.js",
			"use": "@now/node"
		},
	],
}