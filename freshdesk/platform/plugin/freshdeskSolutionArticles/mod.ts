//declare variable
declare const account: string;

// Appends Account subdomain and article ID generate a full URL
export function createFreshdeskSolutionUrl(articleId: string) {
    if (`${account}`.includes("freshdesk")) {  
        var accountclean = `${account}`.split('.freshdesk')[0]
        var url = accountclean + ".freshdesk.com/support/solutions/articles/" + articleId
        }   
    else {
        var url = `${account}` + "/support/solutions/articles/" + articleId    
        }
    return url
    }
