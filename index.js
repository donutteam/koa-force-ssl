//
// Imports
//

import isLocalIP from "is-local-ip";

//
// Exports
//

/**
 * A class for creating Koa middlewares that redirect incoming requests to HTTPS.
 */
export class ForceSSLMiddleware
{
	/**
	 * @type {import("koa").Middleware}
	 */
	execute;

	/**
	 * Constructs a new ForceSSLMiddleware.
	 *
	 * @author Loren Goodwin
	 */
	constructor()
	{
		this.execute = async (context, next) =>
		{
			if (!context.secure)
			{
				const isLocalRequest = isLocalIP(context.request.ip);

				if (!isLocalRequest)
				{
					const url = new URL(context.request.href);

					url.protocol = "https:";
	
					return await context.redirect(url.toString());
				}
			}

			await next();
		};
	}
}