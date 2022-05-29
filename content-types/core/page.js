module.exports = {
  "name": "Core: Page",
  "description": "",
  "displayField": "title",
  "fields": [
    {
      "id": "title",
      "name": "title ",
      "type": "Symbol"
    },
    {
      "id": "pageTitle",
      "name": "pageTitle",
      "type": "Symbol"
    },
    {
      "id": "slug",
      "name": "slug",
      "type": "Symbol"
    },
    {
      "id": "articles",
      "name": "articles",
      "type": "Array",
      "items": {
        "type": "Link",
        "validations": [
          {
            "linkContentType": [
              "coreArticle"
            ]
          }
        ],
        "linkType": "Entry"
      }
    }
  ]
}