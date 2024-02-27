export default function handleHttpError(response) {
    switch (response.status) {
        case 400:
            return "Bad Request: The server could not understand the request.";
        case 401:
            return "Unauthorized: Authentication is required and has failed or has not been provided.";
        case 402:
            return "Payment Required: Reserved for future use.";
        case 403:
            return "Forbidden: The server understood the request, but refuses to authorize it.";
        case 404:
            return "Not Found: The requested resource could not be found on the server.";
        case 405:
            return "Method Not Allowed: The method specified in the request is not allowed for the resource.";
        case 406:
            return "Not Acceptable: The resource identified by the request is only capable of generating response entities that have content characteristics not acceptable according to the accept headers sent in the request.";
        case 407:
            return "Proxy Authentication Required: The client must first authenticate itself with the proxy.";
        case 408:
            return "Request Timeout: The server timed out waiting for the request.";
        case 409:
            return "Conflict: Indicates that the request could not be completed due to a conflict with the current state of the target resource.";
        case 410:
            return "Gone: Indicates that the target resource is no longer available at the server and no forwarding address is known.";
        case 411:
            return "Length Required: The server refuses to accept the request without a defined Content-Length.";
        case 412:
            return "Precondition Failed: The server does not meet one of the preconditions specified in the request headers.";
        case 413:
            return "Payload Too Large: The server is refusing to process a request because the request payload is larger than the server is willing or able to process.";
        case 414:
            return "URI Too Long: The server is refusing to service the request because the request-target is longer than the server is willing to interpret.";
        case 415:
            return "Unsupported Media Type: The server is refusing to service the request because the request payload is in a format not supported by the target resource.";
        case 416:
            return "Range Not Satisfiable: The client has asked for a portion of the file but the server cannot supply that portion.";
        case 417:
            return "Expectation Failed: The expectation given in the request's Expect header could not be met by at least one of the inbound servers.";
        case 418:
            return "I'm a teapot: This code was defined in 1998 as one of the traditional IETF April Fools' jokes.";
        case 421:
            return "Misdirected Request: The request was directed at a server that is not able to produce a response.";
        case 422:
            return "Unprocessable Entity: The request was well-formed but was unable to be followed due to semantic errors.";
        case 423:
            return "Locked: The resource that is being accessed is locked.";
        case 424:
            return "Failed Dependency: The request failed due to failure of a previous request.";
        case 425:
            return "Too Early: Indicates that the server is unwilling to risk processing a request that might be replayed.";
        case 426:
            return "Upgrade Required: The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.";
        case 428:
            return "Precondition Required: The origin server requires the request to be conditional.";
        case 429:
            return "Too Many Requests: The user has sent too many requests in a given amount of time.";
        case 431:
            return "Request Header Fields Too Large: The server is unwilling to process the request because its header fields are too large.";
        case 451:
            return "Unavailable For Legal Reasons: A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource.";
        case 500:
            return "Internal Server Error: A generic error message returned when an unexpected condition was encountered.";
        case 501:
            return "Not Implemented: The server either does not recognize the request method, or it lacks the ability to fulfill the request.";
        case 502:
            return "Bad Gateway: The server was acting as a gateway or proxy and received an invalid response from the upstream server.";
        case 503:
            return "Service Unavailable: The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded.";
        case 504:
            return "Gateway Timeout: The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server or some other auxiliary server it needed to access in order to complete the request.";
        case 505:
            return "HTTP Version Not Supported: The server does not support the HTTP protocol version that was used in the request.";
        case 506:
            return "Variant Also Negotiates: Transparent content negotiation for the request results in a circular reference.";
        case 507:
            return "Insufficient Storage: The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.";
        case 508:
            return "Loop Detected: The server detected an infinite loop while processing a request.";
        case 510:
            return "Not Extended: Further extensions to the request are required for the server to fulfill it.";
        case 511:
            return "Network Authentication Required: The client needs to authenticate to gain network access.";
        default:
            return (
                "Unhandled Error: An unexpected error occurred with status code " +
                response.status +
                "."
            );
    }
}
