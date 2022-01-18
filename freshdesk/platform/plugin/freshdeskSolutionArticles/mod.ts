//declar variable
declare const account: string;

// Appends Account subdomain and article ID generate a full URL
export function createFreshdeskSolutionUrl(articleId: string) {
    var accountclean = `${account}`.split('.')[0]
    var url = accountclean + ".freshdesk.com/support/solutions/articles/" + articleId
    return url
}