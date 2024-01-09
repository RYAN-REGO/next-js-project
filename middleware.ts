import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    //by default clerk treats all the routes as private
    //Routes that have access to even without authentification
    publicRoutes : [
        '/',
        '/events/:id',
        '/api/webhook/clerk',
        '/api/webhook/stripe',
        '/api/uploadthing'
    ],

    ignoredRoutes : [
        '/api/webhook/clerk',
        '/api/webhook/stripe',
        '/api/uploadthing'
    ]
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};