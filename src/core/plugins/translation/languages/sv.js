export default {
  addItem: "Add item",
  cancel: "Cancel",
  clear: "Clear",
  close: "Close",
  download: "Download",
  downloadFile: "Download file",
  edit: "Edit",
  editValue: "Edit Value",
  execute: "Execute",
  explore: "Explore",
  hide: "Hide",
  reset: "Reset",
  show: "Show",
  tryItOut: "Try it out",
  auth: {
    authorize: "Authorize",
    authorized: "Authorized",
    availableAuthorizations: "Available authorizations",
    hidden: "******",
    logout: "Logout",
    scopesDescription: "Scopes are used to grant an application different levels of access to data on behalf of the end user. Each API may declare one or more scopes.",
    scopesDescription2: "API requires the following scopes. Select which ones you want to grant to Swagger UI.",
    apiKey: {
      title: "apiKey",
      name: "Name:",
      in: "In:",
      value: "Value:",
    },
    basic: {
      title: "Basic authorization",
      username: "Username:",
      password: "Password:",
      scheme: "http, Basic"
    },
    bearer: {
      value: "Value:",
      scheme: "http, Bearer"
    },
    oauth2: {
      title: "OAuth2",
      application: "Application:",
      authorizationUrl: "Authorization URL:",
      tokenUrl: "Token URL:",
      flow: "Flow:",
      username: "username:",
      password: "password:",
      credentialsLocation: "Client credentials location:",
      authHeader: "Authorization header",
      requestBody: "Request body",
      clientId: "client_id:",
      clientSecret: "client_secret:",
      scopes: "Scopes:",
    },
    unknownType: "Unknown security definition type {{type}}",
    unsupportedScheme: {
      1: "",
      2: " HTTP authentication: unsupported scheme {{scheme}}"
    },
  },
  callbacks: {
    title: "Callbacks",
    no: "No callbacks",
  },
  definitions: {
    select: "Select a definition",
  },
  errors: {
    header: "Errors",
    atPath: "at {{path}}",
    onLine: "on line {{line}}",
    jumpToLine: "Jump to line {{line}}",
    loadDefinition: "Failed to load API definition.",
    loadRemoteConfig: "Failed to load remote configuration.",
    noDefinition: "No API definition provided.",
  },
  examples: {
    unavailable: {
      1: "Example values are not available for ",
      2: " media types.",
    },
  },
  filters: {
    placeholder: "Filter by tag",
  },
  headers: {
    title: "Headers:",
    name: "Name",
    description: "Description",
    type: "Type",
  },
  info: {
    termsOfService: "Terms of service",
    developer: "the developer",
    website: "{{ name }} - Website",
    sendEmail: "Send email to {{name}}",
    contact: "Contact {{name}}",
    baseUrl: "Base URL:",
  },
  models: {
    models: "Models",
    schemas: "Schemas",
    model: "Model",
    schema: "Schema",
    description: "description:",
    enum: "Enum:",
    deprecated: "Deprecated:",
    exampleValue: "Example Value",
  },
  operations: {
    linkTitle: "Operation `{{name}}`",
    linkParameters: "Parameters `{{parameters}}`",
    moreDetails: "Find more details",
    deprecated: "Warning: Deprecated",
    noDefined: "No operations defined in spec!",
    extensions: "Extensions",
    field: "Field",
    value: "Value",
    expand: "Expand operation",
    collapse: "Collapse operation",
  },
  parameters: {
    title: "Parameters",
    no: "No parameters",
    name: "Name",
    description: "Description",
    sendEmptyValue: "Send empty value",
    contentType: "Parameter content type",
    availableValues: "Available values:",
    defaultValue: "Default value:",
    deprecated: "deprecated",
    formDataUnsupported: "Error: your browser does not support FormData",
  },
  properties: {
    example: "example:",
    xml: "xml:",
  },
  request: {
    url: "Request URL",
    duration: "Request duration",
    ms: "{{duration}} ms",
    body: "Request body",
    curl: "Curl",
  },
  response: {
    responses: "Responses",
    contentType: "Response content type",
    headers: "Response headers",
    code: "Code",
    description: "Description",
    links: "Links",
    noLinks: "No links",
    controlsAcceptHeader: {
      1: "Controls ",
      2: " header.",
    },
    serverResponse: "Server response",
    details: "Details",
    body: "Response body",
    displayingAsText: "Unrecognized response type; displaying content as text.",
    unableToDisplay: "Unrecognized response type; unable to display.",
    blobUnsupported: "Download headers detected but your browser does not support downloading binary via XHR (Blob).",
    undocumented: "Undocumented",
  },
  schemes: {
    schemes: "Schemes",
  },
  servers: {
    title: "Servers",
    override: "These {{level}}-level options override the global server options.",
    ofLevel: {
      operation: "operation",
      path: "path",
    },
    computedUrl: "Computed URL:",
    variables: "Server variables",
  },
  validator: {
    title: "Online validator badge",
    error: "Error",
  },
  versionPragma: {
    header: "Unable to render this definition",
    noValidVersion: "The provided definition does not specify a valid version field.",
    conflict: {
      1: "",
      2: " and ",
      3: " fields cannot be present in the same Swagger or OpenAPI definition. Please remove one of the fields.",
    },
    needValid: "Please indicate a valid Swagger or OpenAPI version field.",
    supported: {
      1: "Supported version fields are ",
      2: " and those that match ",
      3: " (for example, ",
      4: ").",
    },
  },
  versions: {
    "oas3": "OAS3",
  },
  xpane: {
    hideEditor: "Hide Editor",
    showEditor: "Show Editor",
    format: "Format contents",
    overview: "Overview",
  },
}
