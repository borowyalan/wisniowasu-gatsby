module.exports = {
	siteMetadata: {
		title: "Konferencja Samorządów Warszawskich | Wiśniowa SU",
		description: 'Sprawdź co możemy zrobic wspólnymi siłamy na konferencji samorządów na Wiśniowej',
		author: "@Borowy Alan",
	},
	plugins: [
		{
			resolve: "gatsby-plugin-google-analytics",
			options: {
			  // The property ID; the tracking code won't be generated without it
			  trackingId: "UA-156094275-2",
			  // Defines where to place the tracking script - "true" in the head and "false" in the body
			  head: false,
			  // Setting this parameter is optional
			  anonymize: true,
			  // Setting this parameter is also optional
			  respectDNT: true,
			  // Avoids sending pageview hits from custom paths
			  exclude: ["/preview/**", "/do-not-track/me/too/"],
			  // Delays sending pageview hits on route update (in milliseconds)
			  pageTransitionDelay: 0,
			  // Any additional optional fields
			  sampleRate: 5,
			  siteSpeedSampleRate: 10,
			  cookieDomain: "pasje.wisniowasu.pl",
			},
		},
		"gatsby-plugin-sass",
		"gatsby-plugin-react-helmet",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "${__dirname}/src/images",
			},
		},
		"gatsby-transformer-sharp",
		"gatsby-plugin-sharp",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "gatsby-starter-default",
				short_name: "starter",
				start_url: "/",
				background_color: "#663399",
				theme_color: "#663399",
				display: "minimal-ui",
				icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// "gatsby-plugin-offline",
	],
}
