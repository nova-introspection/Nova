export default {
  "nodes": [
    {
      "name": "QueryRoot",
      "kind": "OBJECT",
      "description": "The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start.",
      "fields": [
        {
          "name": "articles",
          "description": "List of the shop's articles.",
          "args": [
            {
              "name": "first",
              "description": "Returns up to the first `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "after",
              "description": "Returns the elements that come after the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "last",
              "description": "Returns up to the last `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "before",
              "description": "Returns the elements that come before the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "reverse",
              "description": "Reverse the order of the underlying list.",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": "false"
            },
            {
              "name": "sortKey",
              "description": "Sort the underlying list by the given key.",
              "type": {
                "kind": "ENUM",
                "name": "ArticleSortKeys",
                "ofType": null
              },
              "defaultValue": "ID"
            },
            {
              "name": "query",
              "description": "Supported filter parameters:\n - `author`\n - `blog_title`\n - `created_at`\n - `tag`\n - `updated_at`\n\nSee the detailed [search syntax](https://help.shopify.com/api/getting-started/search-syntax).\n",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "ArticleConnection"
          }
        },
        {
          "name": "blogByHandle",
          "description": "Find a blog by its handle.",
          "args": [
            {
              "name": "handle",
              "description": "The handle of the blog.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Blog"
          }
        },
        {
          "name": "blogs",
          "description": "List of the shop's blogs.",
          "args": [
            {
              "name": "first",
              "description": "Returns up to the first `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "after",
              "description": "Returns the elements that come after the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "last",
              "description": "Returns up to the last `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "before",
              "description": "Returns the elements that come before the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "reverse",
              "description": "Reverse the order of the underlying list.",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": "false"
            },
            {
              "name": "sortKey",
              "description": "Sort the underlying list by the given key.",
              "type": {
                "kind": "ENUM",
                "name": "BlogSortKeys",
                "ofType": null
              },
              "defaultValue": "ID"
            },
            {
              "name": "query",
              "description": "Supported filter parameters:\n - `created_at`\n - `handle`\n - `title`\n - `updated_at`\n\nSee the detailed [search syntax](https://help.shopify.com/api/getting-started/search-syntax).\n",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "BlogConnection"
          }
        },
        {
          "name": "collectionByHandle",
          "description": "Find a collection by its handle.",
          "args": [
            {
              "name": "handle",
              "description": "The handle of the collection.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Collection"
          }
        },
        {
          "name": "collections",
          "description": "List of the shop’s collections.",
          "args": [
            {
              "name": "first",
              "description": "Returns up to the first `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "after",
              "description": "Returns the elements that come after the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "last",
              "description": "Returns up to the last `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "before",
              "description": "Returns the elements that come before the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "reverse",
              "description": "Reverse the order of the underlying list.",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": "false"
            },
            {
              "name": "sortKey",
              "description": "Sort the underlying list by the given key.",
              "type": {
                "kind": "ENUM",
                "name": "CollectionSortKeys",
                "ofType": null
              },
              "defaultValue": "ID"
            },
            {
              "name": "query",
              "description": "Supported filter parameters:\n - `collection_type`\n - `title`\n - `updated_at`\n\nSee the detailed [search syntax](https://help.shopify.com/api/getting-started/search-syntax).\n",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "CollectionConnection"
          }
        },
        {
          "name": "customer",
          "description": null,
          "args": [
            {
              "name": "customerAccessToken",
              "description": "The customer access token",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Customer"
          }
        },
        {
          "name": "node",
          "description": null,
          "args": [
            {
              "name": "id",
              "description": "The ID of the Node to return.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {}
        },
        {
          "name": "nodes",
          "description": null,
          "args": [
            {
              "name": "ids",
              "description": "The IDs of the Nodes to return.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  }
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true
          }
        },
        {
          "name": "pageByHandle",
          "description": "Find a page by its handle.",
          "args": [
            {
              "name": "handle",
              "description": "The handle of the page.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Page"
          }
        },
        {
          "name": "pages",
          "description": "List of the shop's pages.",
          "args": [
            {
              "name": "first",
              "description": "Returns up to the first `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "after",
              "description": "Returns the elements that come after the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "last",
              "description": "Returns up to the last `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "before",
              "description": "Returns the elements that come before the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "reverse",
              "description": "Reverse the order of the underlying list.",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": "false"
            },
            {
              "name": "sortKey",
              "description": "Sort the underlying list by the given key.",
              "type": {
                "kind": "ENUM",
                "name": "PageSortKeys",
                "ofType": null
              },
              "defaultValue": "ID"
            },
            {
              "name": "query",
              "description": "Supported filter parameters:\n - `created_at`\n - `handle`\n - `title`\n - `updated_at`\n\nSee the detailed [search syntax](https://help.shopify.com/api/getting-started/search-syntax).\n",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "PageConnection"
          }
        },
        {
          "name": "productByHandle",
          "description": "Find a product by its handle.",
          "args": [
            {
              "name": "handle",
              "description": "The handle of the product.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Product"
          }
        },
        {
          "name": "productTags",
          "description": "Tags added to products.\nAdditional access scope required: unauthenticated_read_product_tags.\n",
          "args": [
            {
              "name": "first",
              "description": "Returns up to the first `n` elements from the list.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "StringConnection"
          }
        },
        {
          "name": "productTypes",
          "description": "List of the shop’s product types.",
          "args": [
            {
              "name": "first",
              "description": "Returns up to the first `n` elements from the list.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "StringConnection"
          }
        },
        {
          "name": "products",
          "description": "List of the shop’s products.",
          "args": [
            {
              "name": "first",
              "description": "Returns up to the first `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "after",
              "description": "Returns the elements that come after the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "last",
              "description": "Returns up to the last `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "before",
              "description": "Returns the elements that come before the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "reverse",
              "description": "Reverse the order of the underlying list.",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": "false"
            },
            {
              "name": "sortKey",
              "description": "Sort the underlying list by the given key.",
              "type": {
                "kind": "ENUM",
                "name": "ProductSortKeys",
                "ofType": null
              },
              "defaultValue": "ID"
            },
            {
              "name": "query",
              "description": "Supported filter parameters:\n - `available_for_sale`\n - `created_at`\n - `product_type`\n - `tag`\n - `title`\n - `updated_at`\n - `variants.price`\n - `vendor`\n\nSee the detailed [search syntax](https://help.shopify.com/api/getting-started/search-syntax).\n",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "ProductConnection"
          }
        },
        {
          "name": "shop",
          "description": null,
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "Shop"
          }
        }
      ]
    },
    {
      "name": "Node",
      "kind": "INTERFACE",
      "description": "An object with an ID to support global identification.",
      "fields": [
        {
          "name": "id",
          "description": "Globally unique identifier.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "ID"
          }
        }
      ]
    },
    {
      "name": "Customer",
      "kind": "OBJECT",
      "description": "A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout.",
      "fields": [
        {
          "name": "acceptsMarketing",
          "description": "Indicates whether the customer has consented to be sent marketing material via email.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Boolean"
          }
        },
        {
          "name": "addresses",
          "description": "A list of addresses for the customer.",
          "args": [
            {
              "name": "first",
              "description": "Returns up to the first `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "after",
              "description": "Returns the elements that come after the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "last",
              "description": "Returns up to the last `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "before",
              "description": "Returns the elements that come before the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "reverse",
              "description": "Reverse the order of the underlying list.",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": "false"
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "MailingAddressConnection"
          }
        },
        {
          "name": "createdAt",
          "description": "The date and time when the customer was created.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "DateTime"
          }
        },
        {
          "name": "defaultAddress",
          "description": "The customer’s default address.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "MailingAddress"
          }
        },
        {
          "name": "displayName",
          "description": "The customer’s name, email or phone number.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "email",
          "description": "The customer’s email address.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "firstName",
          "description": "The customer’s first name.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "id",
          "description": "A unique identifier for the customer.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "ID"
          }
        },
        {
          "name": "lastIncompleteCheckout",
          "description": "The customer's most recently updated, incomplete checkout.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Checkout"
          }
        },
        {
          "name": "lastName",
          "description": "The customer’s last name.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "orders",
          "description": "The orders associated with the customer.",
          "args": [
            {
              "name": "first",
              "description": "Returns up to the first `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "after",
              "description": "Returns the elements that come after the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "last",
              "description": "Returns up to the last `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "before",
              "description": "Returns the elements that come before the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "reverse",
              "description": "Reverse the order of the underlying list.",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": "false"
            },
            {
              "name": "sortKey",
              "description": "Sort the underlying list by the given key.",
              "type": {
                "kind": "ENUM",
                "name": "OrderSortKeys",
                "ofType": null
              },
              "defaultValue": "ID"
            },
            {
              "name": "query",
              "description": "Supported filter parameters:\n - `processed_at`\n\nSee the detailed [search syntax](https://help.shopify.com/api/getting-started/search-syntax).\n",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "OrderConnection"
          }
        },
        {
          "name": "phone",
          "description": "The customer’s phone number.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "tags",
          "description": "A list of tags assigned to the customer.\nAdditional access scope required: unauthenticated_read_customer_tags.\n",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "updatedAt",
          "description": "The date and time when the customer information was updated.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "DateTime"
          }
        }
      ],
      "color": 9
    },
    {
      "name": "MailingAddress",
      "kind": "OBJECT",
      "description": "Represents a mailing address for customers and shipping.",
      "fields": [
        {
          "name": "address1",
          "description": "The first line of the address. Typically the street address or PO Box number.\n",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "address2",
          "description": "The second line of the address. Typically the number of the apartment, suite, or unit.\n",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "city",
          "description": "The name of the city, district, village, or town.\n",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "company",
          "description": "The name of the customer's company or organization.\n",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "country",
          "description": "The name of the country.\n",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "countryCode",
          "description": "The two-letter code for the country of the address.\n\nFor example, US.\n",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "countryCodeV2",
          "description": "The two-letter code for the country of the address.\n\nFor example, US.\n",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "ENUM",
            "name": "CountryCode"
          }
        },
        {
          "name": "firstName",
          "description": "The first name of the customer.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "formatted",
          "description": "A formatted version of the address, customized by the provided arguments.",
          "args": [
            {
              "name": "withName",
              "description": "Whether to include the customer's name in the formatted address.",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": "false"
            },
            {
              "name": "withCompany",
              "description": "Whether to include the customer's company in the formatted address.",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": "true"
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "formattedArea",
          "description": "A comma-separated list of the values for city, province, and country.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "id",
          "description": "Globally unique identifier.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "ID"
          }
        },
        {
          "name": "lastName",
          "description": "The last name of the customer.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "latitude",
          "description": "The latitude coordinate of the customer address.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "Float"
          }
        },
        {
          "name": "longitude",
          "description": "The longitude coordinate of the customer address.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "Float"
          }
        },
        {
          "name": "name",
          "description": "The full name of the customer, based on firstName and lastName.\n",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "phone",
          "description": "A unique phone number for the customer.\n\nFormatted using E.164 standard. For example, _+16135551111_.\n",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "province",
          "description": "The region of the address, such as the province, state, or district.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "provinceCode",
          "description": "The two-letter code for the region.\n\nFor example, ON.\n",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "zip",
          "description": "The zip or postal code of the address.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        }
      ],
      "color": 6
    },
    {
      "name": "MailingAddressConnection",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "edges",
          "description": "A list of edges.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "MailingAddressEdge"
          }
        },
        {
          "name": "pageInfo",
          "description": "Information to aid in pagination.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "PageInfo"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "PageInfo",
      "kind": "OBJECT",
      "description": "Information about pagination in a connection.",
      "fields": [
        {
          "name": "hasNextPage",
          "description": "Indicates if there are more pages to fetch.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Boolean"
          }
        },
        {
          "name": "hasPreviousPage",
          "description": "Indicates if there are any pages prior to the current page.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Boolean"
          }
        }
      ],
      "color": 15
    },
    {
      "name": "MailingAddressEdge",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "cursor",
          "description": "A cursor for use in pagination.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "node",
          "description": "The item at the end of MailingAddressEdge.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "MailingAddress"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "OrderConnection",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "edges",
          "description": "A list of edges.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "OrderEdge"
          }
        },
        {
          "name": "pageInfo",
          "description": "Information to aid in pagination.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "PageInfo"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "OrderEdge",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "cursor",
          "description": "A cursor for use in pagination.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "node",
          "description": "The item at the end of OrderEdge.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "Order"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "Order",
      "kind": "OBJECT",
      "description": "An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information.",
      "fields": [
        {
          "name": "currencyCode",
          "description": "The code of the currency used for the payment.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "ENUM",
            "name": "CurrencyCode"
          }
        },
        {
          "name": "customerLocale",
          "description": "The locale code in which this specific order happened.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "customerUrl",
          "description": "The unique URL that the customer can use to access the order.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "URL"
          }
        },
        {
          "name": "discountApplications",
          "description": "Discounts that have been applied on the order.",
          "args": [
            {
              "name": "first",
              "description": "Returns up to the first `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "after",
              "description": "Returns the elements that come after the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "last",
              "description": "Returns up to the last `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "before",
              "description": "Returns the elements that come before the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "reverse",
              "description": "Reverse the order of the underlying list.",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": "false"
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "DiscountApplicationConnection"
          }
        },
        {
          "name": "email",
          "description": "The customer's email address.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "id",
          "description": "Globally unique identifier.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "ID"
          }
        },
        {
          "name": "lineItems",
          "description": "List of the order’s line items.",
          "args": [
            {
              "name": "first",
              "description": "Returns up to the first `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "after",
              "description": "Returns the elements that come after the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "last",
              "description": "Returns up to the last `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "before",
              "description": "Returns the elements that come before the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "reverse",
              "description": "Reverse the order of the underlying list.",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": "false"
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "OrderLineItemConnection"
          }
        },
        {
          "name": "name",
          "description": "Unique identifier for the order that appears on the order.\nFor example, _#1000_ or _Store1001.\n",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "orderNumber",
          "description": "A unique numeric identifier for the order for use by shop owner and customer.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Int"
          }
        },
        {
          "name": "phone",
          "description": "The customer's phone number.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "processedAt",
          "description": "The date and time when the order was imported.\nThis value can be set to dates in the past when importing from other systems.\nIf no value is provided, it will be auto-generated based on current date and time.\n",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "DateTime"
          }
        },
        {
          "name": "shippingAddress",
          "description": "The address to where the order will be shipped.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "MailingAddress"
          }
        },
        {
          "name": "shippingDiscountAllocations",
          "description": "The discounts that have been allocated onto the shipping line by discount applications.\n",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "DiscountAllocation"
          }
        },
        {
          "name": "statusUrl",
          "description": "The unique URL for the order's status page.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "URL"
          }
        },
        {
          "name": "subtotalPrice",
          "description": "Price of the order before shipping and taxes.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "Money"
          }
        },
        {
          "name": "subtotalPriceV2",
          "description": "Price of the order before shipping and taxes.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "MoneyV2"
          }
        },
        {
          "name": "successfulFulfillments",
          "description": "List of the order’s successful fulfillments.",
          "args": [
            {
              "name": "first",
              "description": "Truncate the array result to this size.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isList": true,
            "isRequired": true,
            "kind": "OBJECT",
            "name": "Fulfillment"
          }
        },
        {
          "name": "totalPrice",
          "description": "The sum of all the prices of all the items in the order, taxes and discounts included (must be positive).",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Money"
          }
        },
        {
          "name": "totalPriceV2",
          "description": "The sum of all the prices of all the items in the order, taxes and discounts included (must be positive).",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "MoneyV2"
          }
        },
        {
          "name": "totalRefunded",
          "description": "The total amount that has been refunded.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Money"
          }
        },
        {
          "name": "totalRefundedV2",
          "description": "The total amount that has been refunded.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "MoneyV2"
          }
        },
        {
          "name": "totalShippingPrice",
          "description": "The total cost of shipping.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Money"
          }
        },
        {
          "name": "totalShippingPriceV2",
          "description": "The total cost of shipping.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "MoneyV2"
          }
        },
        {
          "name": "totalTax",
          "description": "The total cost of taxes.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "Money"
          }
        },
        {
          "name": "totalTaxV2",
          "description": "The total cost of taxes.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "MoneyV2"
          }
        }
      ],
      "color": 1
    },
    {
      "name": "MoneyV2",
      "kind": "OBJECT",
      "description": "A monetary value with currency.\n\nTo format currencies, combine this type's amount and currencyCode fields with your client's locale.\n\nFor example, in JavaScript you could use Intl.NumberFormat:\n\n```js\nnew Intl.NumberFormat(locale, {\n  style: 'currency',\n  currency: currencyCode\n}).format(amount);\n```\n\nOther formatting libraries include:\n\n* iOS - [NumberFormatter](https://developer.apple.com/documentation/foundation/numberformatter)\n* Android - [NumberFormat](https://developer.android.com/reference/java/text/NumberFormat.html)\n* PHP - [NumberFormatter](http://php.net/manual/en/class.numberformatter.php)\n\nFor a more general solution, the [Unicode CLDR number formatting database] is available with many implementations\n(such as [TwitterCldr](https://github.com/twitter/twitter-cldr-rb)).\n",
      "fields": [
        {
          "name": "amount",
          "description": "Decimal money amount.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Decimal"
          }
        },
        {
          "name": "currencyCode",
          "description": "Currency of the money.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "ENUM",
            "name": "CurrencyCode"
          }
        }
      ],
      "color": 19
    },
    {
      "name": "DiscountAllocation",
      "kind": "OBJECT",
      "description": "An amount discounting the line that has been allocated by a discount.\n",
      "fields": [
        {
          "name": "allocatedAmount",
          "description": "Amount of discount allocated.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "MoneyV2"
          }
        },
        {
          "name": "discountApplication",
          "description": "The discount this allocated amount originated from.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true
          }
        }
      ],
      "color": 3
    },
    {
      "name": "DiscountApplication",
      "kind": "INTERFACE",
      "description": "Discount applications capture the intentions of a discount source at\nthe time of application.\n",
      "fields": [
        {
          "name": "allocationMethod",
          "description": "The method by which the discount's value is allocated to its entitled items.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "ENUM",
            "name": "DiscountApplicationAllocationMethod"
          }
        },
        {
          "name": "targetSelection",
          "description": "Which lines of targetType that the discount is allocated over.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "ENUM",
            "name": "DiscountApplicationTargetSelection"
          }
        },
        {
          "name": "targetType",
          "description": "The type of line that the discount is applicable towards.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "ENUM",
            "name": "DiscountApplicationTargetType"
          }
        },
        {
          "name": "value",
          "description": "The value of the discount application.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "UNION",
            "name": "PricingValue"
          }
        }
      ]
    },
    {
      "name": "PricingPercentageValue",
      "kind": "OBJECT",
      "description": "The value of the percentage pricing object.",
      "fields": [
        {
          "name": "percentage",
          "description": "The percentage value of the object.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Float"
          }
        }
      ]
    },
    {
      "name": "OrderLineItemConnection",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "edges",
          "description": "A list of edges.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "OrderLineItemEdge"
          }
        },
        {
          "name": "pageInfo",
          "description": "Information to aid in pagination.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "PageInfo"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "OrderLineItemEdge",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "cursor",
          "description": "A cursor for use in pagination.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "node",
          "description": "The item at the end of OrderLineItemEdge.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "OrderLineItem"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "OrderLineItem",
      "kind": "OBJECT",
      "description": "Represents a single line in an order. There is one line item for each distinct product variant.",
      "fields": [
        {
          "name": "customAttributes",
          "description": "List of custom attributes associated to the line item.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "Attribute"
          }
        },
        {
          "name": "discountAllocations",
          "description": "The discounts that have been allocated onto the order line item by discount applications.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "DiscountAllocation"
          }
        },
        {
          "name": "quantity",
          "description": "The number of products variants associated to the line item.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Int"
          }
        },
        {
          "name": "title",
          "description": "The title of the product combined with title of the variant.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "variant",
          "description": "The product variant object associated to the line item.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "ProductVariant"
          }
        }
      ],
      "color": 1
    },
    {
      "name": "ProductVariant",
      "kind": "OBJECT",
      "description": "A product variant represents a different version of a product, such as differing sizes or differing colors.",
      "fields": [
        {
          "name": "available",
          "description": "Indicates if the product variant is in stock.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "Boolean"
          }
        },
        {
          "name": "availableForSale",
          "description": "Indicates if the product variant is available for sale.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Boolean"
          }
        },
        {
          "name": "compareAtPrice",
          "description": "The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPrice` is higher than `price`.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "Money"
          }
        },
        {
          "name": "compareAtPriceV2",
          "description": "The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPriceV2` is higher than `priceV2`.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "MoneyV2"
          }
        },
        {
          "name": "id",
          "description": "Globally unique identifier.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "ID"
          }
        },
        {
          "name": "image",
          "description": "Image associated with the product variant. This field falls back to the product image if no image is available.",
          "args": [
            {
              "name": "maxWidth",
              "description": "Image width in pixels between 1 and 2048. This argument is deprecated: Use `maxWidth` on `Image.transformedSrc` instead.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "maxHeight",
              "description": "Image height in pixels between 1 and 2048. This argument is deprecated: Use `maxHeight` on `Image.transformedSrc` instead.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "crop",
              "description": "Crops the image according to the specified region. This argument is deprecated: Use `crop` on `Image.transformedSrc` instead.",
              "type": {
                "kind": "ENUM",
                "name": "CropRegion",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "scale",
              "description": "Image size multiplier for high-resolution retina displays. Must be between 1 and 3. This argument is deprecated: Use `scale` on `Image.transformedSrc` instead.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": "1"
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Image"
          }
        },
        {
          "name": "presentmentPrices",
          "description": "List of prices and compare-at prices in the presentment currencies for this shop.",
          "args": [
            {
              "name": "presentmentCurrencies",
              "description": "The presentment currencies prices should return in.",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "ENUM",
                    "name": "CurrencyCode",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            },
            {
              "name": "first",
              "description": "Returns up to the first `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "after",
              "description": "Returns the elements that come after the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "last",
              "description": "Returns up to the last `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "before",
              "description": "Returns the elements that come before the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "reverse",
              "description": "Reverse the order of the underlying list.",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": "false"
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "ProductVariantPricePairConnection"
          }
        },
        {
          "name": "price",
          "description": "The product variant’s price.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Money"
          }
        },
        {
          "name": "priceV2",
          "description": "The product variant’s price.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "MoneyV2"
          }
        },
        {
          "name": "product",
          "description": "The product object that the product variant belongs to.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "Product"
          }
        },
        {
          "name": "selectedOptions",
          "description": "List of product options applied to the variant.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "SelectedOption"
          }
        },
        {
          "name": "sku",
          "description": "The SKU (stock keeping unit) associated with the variant.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "title",
          "description": "The product variant’s title.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "weight",
          "description": "The weight of the product variant in the unit system specified with `weight_unit`.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "Float"
          }
        },
        {
          "name": "weightUnit",
          "description": "Unit of measurement for weight.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "ENUM",
            "name": "WeightUnit"
          }
        }
      ],
      "color": 3
    },
    {
      "name": "Product",
      "kind": "OBJECT",
      "description": "A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.\nFor example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).",
      "fields": [
        {
          "name": "availableForSale",
          "description": "Indicates if at least one product variant is available for sale.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Boolean"
          }
        },
        {
          "name": "collections",
          "description": "List of collections a product belongs to.",
          "args": [
            {
              "name": "first",
              "description": "Returns up to the first `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "after",
              "description": "Returns the elements that come after the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "last",
              "description": "Returns up to the last `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "before",
              "description": "Returns the elements that come before the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "reverse",
              "description": "Reverse the order of the underlying list.",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": "false"
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "CollectionConnection"
          }
        },
        {
          "name": "createdAt",
          "description": "The date and time when the product was created.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "DateTime"
          }
        },
        {
          "name": "description",
          "description": "Stripped description of the product, single line with HTML tags removed.",
          "args": [
            {
              "name": "truncateAt",
              "description": "Truncates string after the given length.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "descriptionHtml",
          "description": "The description of the product, complete with HTML formatting.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "HTML"
          }
        },
        {
          "name": "handle",
          "description": "A human-friendly unique string for the Product automatically generated from its title.\nThey are used by the Liquid templating language to refer to objects.\n",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "id",
          "description": "Globally unique identifier.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "ID"
          }
        },
        {
          "name": "images",
          "description": "List of images associated with the product.",
          "args": [
            {
              "name": "first",
              "description": "Returns up to the first `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "after",
              "description": "Returns the elements that come after the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "last",
              "description": "Returns up to the last `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "before",
              "description": "Returns the elements that come before the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "reverse",
              "description": "Reverse the order of the underlying list.",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": "false"
            },
            {
              "name": "sortKey",
              "description": "Sort the underlying list by the given key.",
              "type": {
                "kind": "ENUM",
                "name": "ProductImageSortKeys",
                "ofType": null
              },
              "defaultValue": "POSITION"
            },
            {
              "name": "maxWidth",
              "description": "Image width in pixels between 1 and 2048. This argument is deprecated: Use `maxWidth` on `Image.transformedSrc` instead.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "maxHeight",
              "description": "Image height in pixels between 1 and 2048. This argument is deprecated: Use `maxHeight` on `Image.transformedSrc` instead.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "crop",
              "description": "Crops the image according to the specified region. This argument is deprecated: Use `crop` on `Image.transformedSrc` instead.",
              "type": {
                "kind": "ENUM",
                "name": "CropRegion",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "scale",
              "description": "Image size multiplier for high-resolution retina displays. Must be between 1 and 3. This argument is deprecated: Use `scale` on `Image.transformedSrc` instead.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": "1"
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "ImageConnection"
          }
        },
        {
          "name": "onlineStoreUrl",
          "description": "The online store URL for the product.\nA value of `null` indicates that the product is not published to the Online Store sales channel.\n",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "URL"
          }
        },
        {
          "name": "options",
          "description": "List of custom product options (maximum of 3 per product).",
          "args": [
            {
              "name": "first",
              "description": "Truncate the array result to this size.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "ProductOption"
          }
        },
        {
          "name": "priceRange",
          "description": "The price range.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "ProductPriceRange"
          }
        },
        {
          "name": "productType",
          "description": "A categorization that a product can be tagged with, commonly used for filtering and searching.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "publishedAt",
          "description": "The date and time when the product was published to the channel.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "DateTime"
          }
        },
        {
          "name": "tags",
          "description": "A categorization that a product can be tagged with, commonly used for filtering and searching.\nAdditional access scope required for private apps: unauthenticated_read_product_tags.\n",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "title",
          "description": "The product’s title.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "updatedAt",
          "description": "The date and time when the product was last modified.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "DateTime"
          }
        },
        {
          "name": "variantBySelectedOptions",
          "description": "Find a product’s variant based on its selected options.\nThis is useful for converting a user’s selection of product options into a single matching variant.\nIf there is not a variant for the selected options, `null` will be returned.\n",
          "args": [
            {
              "name": "selectedOptions",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "SelectedOptionInput",
                      "ofType": null
                    }
                  }
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "ProductVariant"
          }
        },
        {
          "name": "variants",
          "description": "List of the product’s variants.",
          "args": [
            {
              "name": "first",
              "description": "Returns up to the first `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "after",
              "description": "Returns the elements that come after the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "last",
              "description": "Returns up to the last `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "before",
              "description": "Returns the elements that come before the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "reverse",
              "description": "Reverse the order of the underlying list.",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": "false"
            },
            {
              "name": "sortKey",
              "description": "Sort the underlying list by the given key.",
              "type": {
                "kind": "ENUM",
                "name": "ProductVariantSortKeys",
                "ofType": null
              },
              "defaultValue": "POSITION"
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "ProductVariantConnection"
          }
        },
        {
          "name": "vendor",
          "description": "The product’s vendor name.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        }
      ],
      "color": 3
    },
    {
      "name": "CollectionConnection",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "edges",
          "description": "A list of edges.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CollectionEdge"
          }
        },
        {
          "name": "pageInfo",
          "description": "Information to aid in pagination.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "PageInfo"
          }
        }
      ],
      "color": 2
    },
    {
      "name": "CollectionEdge",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "cursor",
          "description": "A cursor for use in pagination.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "node",
          "description": "The item at the end of CollectionEdge.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "Collection"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "Collection",
      "kind": "OBJECT",
      "description": "A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse.",
      "fields": [
        {
          "name": "description",
          "description": "Stripped description of the collection, single line with HTML tags removed.",
          "args": [
            {
              "name": "truncateAt",
              "description": "Truncates string after the given length.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "descriptionHtml",
          "description": "The description of the collection, complete with HTML formatting.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "HTML"
          }
        },
        {
          "name": "handle",
          "description": "A human-friendly unique string for the collection automatically generated from its title.\nLimit of 255 characters.\n",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "id",
          "description": "Globally unique identifier.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "ID"
          }
        },
        {
          "name": "image",
          "description": "Image associated with the collection.",
          "args": [
            {
              "name": "maxWidth",
              "description": "Image width in pixels between 1 and 2048. This argument is deprecated: Use `maxWidth` on `Image.transformedSrc` instead.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "maxHeight",
              "description": "Image height in pixels between 1 and 2048. This argument is deprecated: Use `maxHeight` on `Image.transformedSrc` instead.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "crop",
              "description": "Crops the image according to the specified region. This argument is deprecated: Use `crop` on `Image.transformedSrc` instead.",
              "type": {
                "kind": "ENUM",
                "name": "CropRegion",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "scale",
              "description": "Image size multiplier for high-resolution retina displays. Must be between 1 and 3. This argument is deprecated: Use `scale` on `Image.transformedSrc` instead.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": "1"
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Image"
          }
        },
        {
          "name": "products",
          "description": "List of products in the collection.",
          "args": [
            {
              "name": "first",
              "description": "Returns up to the first `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "after",
              "description": "Returns the elements that come after the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "last",
              "description": "Returns up to the last `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "before",
              "description": "Returns the elements that come before the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "reverse",
              "description": "Reverse the order of the underlying list.",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": "false"
            },
            {
              "name": "sortKey",
              "description": "Sort the underlying list by the given key.",
              "type": {
                "kind": "ENUM",
                "name": "ProductCollectionSortKeys",
                "ofType": null
              },
              "defaultValue": "COLLECTION_DEFAULT"
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "ProductConnection"
          }
        },
        {
          "name": "title",
          "description": "The collection’s name. Limit of 255 characters.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "updatedAt",
          "description": "The date and time when the collection was last modified.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "DateTime"
          }
        }
      ],
      "color": 2
    },
    {
      "name": "Image",
      "kind": "OBJECT",
      "description": "Represents an image resource.",
      "fields": [
        {
          "name": "altText",
          "description": "A word or phrase to share the nature or contents of an image.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "id",
          "description": "A unique identifier for the image.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "ID"
          }
        },
        {
          "name": "originalSrc",
          "description": "The location of the original image as a URL.\n\nIf there are any existing transformations in the original source URL, they will remain and not be stripped.\n",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "URL"
          }
        },
        {
          "name": "src",
          "description": "The location of the image as a URL.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "URL"
          }
        },
        {
          "name": "transformedSrc",
          "description": "The location of the transformed image as a URL.\n\nAll transformation arguments are considered \"best-effort\". If they can be applied to an image, they will be.\nOtherwise any transformations which an image type does not support will be ignored.\n",
          "args": [
            {
              "name": "maxWidth",
              "description": "Image width in pixels between 1 and 5760.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "maxHeight",
              "description": "Image height in pixels between 1 and 5760.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "crop",
              "description": "Crops the image according to the specified region.",
              "type": {
                "kind": "ENUM",
                "name": "CropRegion",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "scale",
              "description": "Image size multiplier for high-resolution retina displays. Must be between 1 and 3.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": "1"
            },
            {
              "name": "preferredContentType",
              "description": "Best effort conversion of image into content type (SVG -> PNG, Anything -> JGP, Anything -> WEBP are supported).",
              "type": {
                "kind": "ENUM",
                "name": "ImageContentType",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "URL"
          }
        }
      ],
      "color": 3
    },
    {
      "name": "ProductConnection",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "edges",
          "description": "A list of edges.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "ProductEdge"
          }
        },
        {
          "name": "pageInfo",
          "description": "Information to aid in pagination.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "PageInfo"
          }
        }
      ],
      "color": 2
    },
    {
      "name": "ProductEdge",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "cursor",
          "description": "A cursor for use in pagination.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "node",
          "description": "The item at the end of ProductEdge.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "Product"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "ImageConnection",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "edges",
          "description": "A list of edges.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "ImageEdge"
          }
        },
        {
          "name": "pageInfo",
          "description": "Information to aid in pagination.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "PageInfo"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "ImageEdge",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "cursor",
          "description": "A cursor for use in pagination.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "node",
          "description": "The item at the end of ImageEdge.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "Image"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "ProductPriceRange",
      "kind": "OBJECT",
      "description": "The price range of the product.",
      "fields": [
        {
          "name": "maxVariantPrice",
          "description": "The highest variant's price.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "MoneyV2"
          }
        },
        {
          "name": "minVariantPrice",
          "description": "The lowest variant's price.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "MoneyV2"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "ProductOption",
      "kind": "OBJECT",
      "description": "Custom product property names like \"Size\", \"Color\", and \"Material\".\nProducts are based on permutations of these options.\nA product may have a maximum of 3 options.\n255 characters limit each.\n",
      "fields": [
        {
          "name": "id",
          "description": "Globally unique identifier.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "ID"
          }
        },
        {
          "name": "name",
          "description": "The product option’s name.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "values",
          "description": "The corresponding value to the product option name.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "SCALAR",
            "name": "String"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "ProductVariantConnection",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "edges",
          "description": "A list of edges.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "ProductVariantEdge"
          }
        },
        {
          "name": "pageInfo",
          "description": "Information to aid in pagination.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "PageInfo"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "ProductVariantEdge",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "cursor",
          "description": "A cursor for use in pagination.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "node",
          "description": "The item at the end of ProductVariantEdge.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "ProductVariant"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "ProductVariantPricePairConnection",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "edges",
          "description": "A list of edges.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "ProductVariantPricePairEdge"
          }
        },
        {
          "name": "pageInfo",
          "description": "Information to aid in pagination.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "PageInfo"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "ProductVariantPricePairEdge",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "cursor",
          "description": "A cursor for use in pagination.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "node",
          "description": "The item at the end of ProductVariantPricePairEdge.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "ProductVariantPricePair"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "ProductVariantPricePair",
      "kind": "OBJECT",
      "description": "The compare-at price and price of a variant sharing a currency.\n",
      "fields": [
        {
          "name": "compareAtPrice",
          "description": "The compare-at price of the variant with associated currency.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "MoneyV2"
          }
        },
        {
          "name": "price",
          "description": "The price of the variant with associated currency.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "MoneyV2"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "SelectedOption",
      "kind": "OBJECT",
      "description": "Custom properties that a shop owner can use to define product variants.\nMultiple options can exist. Options are represented as: option1, option2, option3, etc.\n",
      "fields": [
        {
          "name": "name",
          "description": "The product option’s name.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "value",
          "description": "The product option’s value.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "Attribute",
      "kind": "OBJECT",
      "description": "Represents a generic custom attribute.",
      "fields": [
        {
          "name": "key",
          "description": "Key or name of the attribute.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "value",
          "description": "Value of the attribute.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        }
      ],
      "color": 2
    },
    {
      "name": "Fulfillment",
      "kind": "OBJECT",
      "description": "Represents a single fulfillment in an order.",
      "fields": [
        {
          "name": "fulfillmentLineItems",
          "description": "List of the fulfillment's line items.",
          "args": [
            {
              "name": "first",
              "description": "Returns up to the first `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "after",
              "description": "Returns the elements that come after the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "last",
              "description": "Returns up to the last `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "before",
              "description": "Returns the elements that come before the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "reverse",
              "description": "Reverse the order of the underlying list.",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": "false"
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "FulfillmentLineItemConnection"
          }
        },
        {
          "name": "trackingCompany",
          "description": "The name of the tracking company.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "trackingInfo",
          "description": "Tracking information associated with the fulfillment,\nsuch as the tracking number and tracking URL.\n",
          "args": [
            {
              "name": "first",
              "description": "Truncate the array result to this size.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "FulfillmentTrackingInfo"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "FulfillmentTrackingInfo",
      "kind": "OBJECT",
      "description": "Tracking information associated with the fulfillment.",
      "fields": [
        {
          "name": "number",
          "description": "The tracking number of the fulfillment.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "url",
          "description": "The URL to track the fulfillment.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "URL"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "FulfillmentLineItemConnection",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "edges",
          "description": "A list of edges.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "FulfillmentLineItemEdge"
          }
        },
        {
          "name": "pageInfo",
          "description": "Information to aid in pagination.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "PageInfo"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "FulfillmentLineItemEdge",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "cursor",
          "description": "A cursor for use in pagination.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "node",
          "description": "The item at the end of FulfillmentLineItemEdge.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "FulfillmentLineItem"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "FulfillmentLineItem",
      "kind": "OBJECT",
      "description": "Represents a single line item in a fulfillment. There is at most one fulfillment line item for each order line item.",
      "fields": [
        {
          "name": "lineItem",
          "description": "The associated order's line item.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "OrderLineItem"
          }
        },
        {
          "name": "quantity",
          "description": "The amount fulfilled in this fulfillment.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Int"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "DiscountApplicationConnection",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "edges",
          "description": "A list of edges.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "DiscountApplicationEdge"
          }
        },
        {
          "name": "pageInfo",
          "description": "Information to aid in pagination.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "PageInfo"
          }
        }
      ],
      "color": 1
    },
    {
      "name": "DiscountApplicationEdge",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "cursor",
          "description": "A cursor for use in pagination.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "node",
          "description": "The item at the end of DiscountApplicationEdge.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true
          }
        }
      ],
      "color": 0
    },
    {
      "name": "Checkout",
      "kind": "OBJECT",
      "description": "A container for all the information required to checkout items and pay.",
      "fields": [
        {
          "name": "appliedGiftCards",
          "description": null,
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "AppliedGiftCard"
          }
        },
        {
          "name": "availableShippingRates",
          "description": "The available shipping rates for this Checkout.\nShould only be used when checkout `requiresShipping` is `true` and\nthe shipping address is valid.\n",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "AvailableShippingRates"
          }
        },
        {
          "name": "completedAt",
          "description": "The date and time when the checkout was completed.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "DateTime"
          }
        },
        {
          "name": "createdAt",
          "description": "The date and time when the checkout was created.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "DateTime"
          }
        },
        {
          "name": "currencyCode",
          "description": "The currency code for the Checkout.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "ENUM",
            "name": "CurrencyCode"
          }
        },
        {
          "name": "customAttributes",
          "description": "A list of extra information that is added to the checkout.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "Attribute"
          }
        },
        {
          "name": "customer",
          "description": "The customer associated with the checkout.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Customer"
          }
        },
        {
          "name": "discountApplications",
          "description": "Discounts that have been applied on the checkout.",
          "args": [
            {
              "name": "first",
              "description": "Returns up to the first `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "after",
              "description": "Returns the elements that come after the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "last",
              "description": "Returns up to the last `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "before",
              "description": "Returns the elements that come before the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "reverse",
              "description": "Reverse the order of the underlying list.",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": "false"
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "DiscountApplicationConnection"
          }
        },
        {
          "name": "email",
          "description": "The email attached to this checkout.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "id",
          "description": "Globally unique identifier.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "ID"
          }
        },
        {
          "name": "lineItems",
          "description": "A list of line item objects, each one containing information about an item in the checkout.",
          "args": [
            {
              "name": "first",
              "description": "Returns up to the first `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "after",
              "description": "Returns the elements that come after the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "last",
              "description": "Returns up to the last `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "before",
              "description": "Returns the elements that come before the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "reverse",
              "description": "Reverse the order of the underlying list.",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": "false"
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "CheckoutLineItemConnection"
          }
        },
        {
          "name": "lineItemsSubtotalPrice",
          "description": "The sum of all the prices of all the items in the checkout. Taxes, shipping and discounts excluded.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "MoneyV2"
          }
        },
        {
          "name": "note",
          "description": null,
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "order",
          "description": "The resulting order from a paid checkout.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Order"
          }
        },
        {
          "name": "orderStatusUrl",
          "description": "The Order Status Page for this Checkout, null when checkout is not completed.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "URL"
          }
        },
        {
          "name": "paymentDue",
          "description": "The amount left to be paid. This is equal to the cost of the line items, taxes and shipping minus discounts and gift cards.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Money"
          }
        },
        {
          "name": "paymentDueV2",
          "description": "The amount left to be paid. This is equal to the cost of the line items, taxes and shipping minus discounts and gift cards.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "MoneyV2"
          }
        },
        {
          "name": "ready",
          "description": "Whether or not the Checkout is ready and can be completed. Checkouts may have asynchronous operations that can take time to finish. If you want to complete a checkout or ensure all the fields are populated and up to date, polling is required until the value is true. ",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Boolean"
          }
        },
        {
          "name": "requiresShipping",
          "description": "States whether or not the fulfillment requires shipping.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Boolean"
          }
        },
        {
          "name": "shippingAddress",
          "description": "The shipping address to where the line items will be shipped.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "MailingAddress"
          }
        },
        {
          "name": "shippingDiscountAllocations",
          "description": "The discounts that have been allocated onto the shipping line by discount applications.\n",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "DiscountAllocation"
          }
        },
        {
          "name": "shippingLine",
          "description": "Once a shipping rate is selected by the customer it is transitioned to a `shipping_line` object.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "ShippingRate"
          }
        },
        {
          "name": "subtotalPrice",
          "description": "Price of the checkout before shipping and taxes.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Money"
          }
        },
        {
          "name": "subtotalPriceV2",
          "description": "Price of the checkout before shipping and taxes.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "MoneyV2"
          }
        },
        {
          "name": "taxExempt",
          "description": "Specifies if the Checkout is tax exempt.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Boolean"
          }
        },
        {
          "name": "taxesIncluded",
          "description": "Specifies if taxes are included in the line item and shipping line prices.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Boolean"
          }
        },
        {
          "name": "totalPrice",
          "description": "The sum of all the prices of all the items in the checkout, taxes and discounts included.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Money"
          }
        },
        {
          "name": "totalPriceV2",
          "description": "The sum of all the prices of all the items in the checkout, taxes and discounts included.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "MoneyV2"
          }
        },
        {
          "name": "totalTax",
          "description": "The sum of all the taxes applied to the line items and shipping lines in the checkout.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Money"
          }
        },
        {
          "name": "totalTaxV2",
          "description": "The sum of all the taxes applied to the line items and shipping lines in the checkout.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "MoneyV2"
          }
        },
        {
          "name": "updatedAt",
          "description": "The date and time when the checkout was last updated.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "DateTime"
          }
        },
        {
          "name": "webUrl",
          "description": "The url pointing to the checkout accessible from the web.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "URL"
          }
        }
      ],
      "color": 29
    },
    {
      "name": "CheckoutLineItemConnection",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "edges",
          "description": "A list of edges.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CheckoutLineItemEdge"
          }
        },
        {
          "name": "pageInfo",
          "description": "Information to aid in pagination.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "PageInfo"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CheckoutLineItemEdge",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "cursor",
          "description": "A cursor for use in pagination.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "node",
          "description": "The item at the end of CheckoutLineItemEdge.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "CheckoutLineItem"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CheckoutLineItem",
      "kind": "OBJECT",
      "description": "A single line item in the checkout, grouped by variant and attributes.",
      "fields": [
        {
          "name": "customAttributes",
          "description": "Extra information in the form of an array of Key-Value pairs about the line item.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "Attribute"
          }
        },
        {
          "name": "discountAllocations",
          "description": "The discounts that have been allocated onto the checkout line item by discount applications.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "DiscountAllocation"
          }
        },
        {
          "name": "id",
          "description": "Globally unique identifier.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "ID"
          }
        },
        {
          "name": "quantity",
          "description": "The quantity of the line item.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Int"
          }
        },
        {
          "name": "title",
          "description": "Title of the line item. Defaults to the product's title.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "variant",
          "description": "Product variant of the line item.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "ProductVariant"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "ShippingRate",
      "kind": "OBJECT",
      "description": "A shipping rate to be applied to a checkout.",
      "fields": [
        {
          "name": "handle",
          "description": "Human-readable unique identifier for this shipping rate.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "price",
          "description": "Price of this shipping rate.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Money"
          }
        },
        {
          "name": "priceV2",
          "description": "Price of this shipping rate.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "MoneyV2"
          }
        },
        {
          "name": "title",
          "description": "Title of this shipping rate.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        }
      ],
      "color": 1
    },
    {
      "name": "AvailableShippingRates",
      "kind": "OBJECT",
      "description": "A collection of available shipping rates for a checkout.",
      "fields": [
        {
          "name": "ready",
          "description": "Whether or not the shipping rates are ready.\nThe `shippingRates` field is `null` when this value is `false`.\nThis field should be polled until its value becomes `true`.\n",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Boolean"
          }
        },
        {
          "name": "shippingRates",
          "description": "The fetched shipping rates. `null` until the `ready` field is `true`.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isList": true,
            "isRequired": true,
            "kind": "OBJECT",
            "name": "ShippingRate"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "AppliedGiftCard",
      "kind": "OBJECT",
      "description": "Details about the gift card used on the checkout.",
      "fields": [
        {
          "name": "amountUsed",
          "description": "The amount that was used taken from the Gift Card by applying it.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Money"
          }
        },
        {
          "name": "amountUsedV2",
          "description": "The amount that was used taken from the Gift Card by applying it.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "MoneyV2"
          }
        },
        {
          "name": "balance",
          "description": "The amount left on the Gift Card.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Money"
          }
        },
        {
          "name": "balanceV2",
          "description": "The amount left on the Gift Card.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "MoneyV2"
          }
        },
        {
          "name": "id",
          "description": "Globally unique identifier.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "ID"
          }
        },
        {
          "name": "lastCharacters",
          "description": "The last characters of the Gift Card code",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "Shop",
      "kind": "OBJECT",
      "description": "Shop represents a collection of the general settings and information about the shop.",
      "fields": [
        {
          "name": "articles",
          "description": "List of the shop' articles.",
          "args": [
            {
              "name": "first",
              "description": "Returns up to the first `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "after",
              "description": "Returns the elements that come after the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "last",
              "description": "Returns up to the last `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "before",
              "description": "Returns the elements that come before the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "reverse",
              "description": "Reverse the order of the underlying list.",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": "false"
            },
            {
              "name": "sortKey",
              "description": "Sort the underlying list by the given key.",
              "type": {
                "kind": "ENUM",
                "name": "ArticleSortKeys",
                "ofType": null
              },
              "defaultValue": "ID"
            },
            {
              "name": "query",
              "description": "Supported filter parameters:\n - `author`\n - `blog_title`\n - `created_at`\n - `tag`\n - `updated_at`\n\nSee the detailed [search syntax](https://help.shopify.com/api/getting-started/search-syntax).\n",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "ArticleConnection"
          }
        },
        {
          "name": "blogs",
          "description": "List of the shop' blogs.",
          "args": [
            {
              "name": "first",
              "description": "Returns up to the first `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "after",
              "description": "Returns the elements that come after the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "last",
              "description": "Returns up to the last `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "before",
              "description": "Returns the elements that come before the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "reverse",
              "description": "Reverse the order of the underlying list.",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": "false"
            },
            {
              "name": "sortKey",
              "description": "Sort the underlying list by the given key.",
              "type": {
                "kind": "ENUM",
                "name": "BlogSortKeys",
                "ofType": null
              },
              "defaultValue": "ID"
            },
            {
              "name": "query",
              "description": "Supported filter parameters:\n - `created_at`\n - `handle`\n - `title`\n - `updated_at`\n\nSee the detailed [search syntax](https://help.shopify.com/api/getting-started/search-syntax).\n",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "BlogConnection"
          }
        },
        {
          "name": "collectionByHandle",
          "description": "Find a collection by its handle.",
          "args": [
            {
              "name": "handle",
              "description": "The handle of the collection.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Collection"
          }
        },
        {
          "name": "collections",
          "description": "List of the shop’s collections.",
          "args": [
            {
              "name": "first",
              "description": "Returns up to the first `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "after",
              "description": "Returns the elements that come after the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "last",
              "description": "Returns up to the last `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "before",
              "description": "Returns the elements that come before the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "reverse",
              "description": "Reverse the order of the underlying list.",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": "false"
            },
            {
              "name": "sortKey",
              "description": "Sort the underlying list by the given key.",
              "type": {
                "kind": "ENUM",
                "name": "CollectionSortKeys",
                "ofType": null
              },
              "defaultValue": "ID"
            },
            {
              "name": "query",
              "description": "Supported filter parameters:\n - `collection_type`\n - `title`\n - `updated_at`\n\nSee the detailed [search syntax](https://help.shopify.com/api/getting-started/search-syntax).\n",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "CollectionConnection"
          }
        },
        {
          "name": "currencyCode",
          "description": "The three-letter code for the currency that the shop accepts.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "ENUM",
            "name": "CurrencyCode"
          }
        },
        {
          "name": "description",
          "description": "A description of the shop.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "moneyFormat",
          "description": "A string representing the way currency is formatted when the currency isn’t specified.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "name",
          "description": "The shop’s name.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "paymentSettings",
          "description": "Settings related to payments.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "PaymentSettings"
          }
        },
        {
          "name": "primaryDomain",
          "description": "The shop’s primary domain.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "Domain"
          }
        },
        {
          "name": "privacyPolicy",
          "description": "The shop’s privacy policy.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "ShopPolicy"
          }
        },
        {
          "name": "productByHandle",
          "description": "Find a product by its handle.",
          "args": [
            {
              "name": "handle",
              "description": "The handle of the product.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Product"
          }
        },
        {
          "name": "productTags",
          "description": "Tags added to products.\nAdditional access scope required: unauthenticated_read_product_tags.\n",
          "args": [
            {
              "name": "first",
              "description": "Returns up to the first `n` elements from the list.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "StringConnection"
          }
        },
        {
          "name": "productTypes",
          "description": "List of the shop’s product types.",
          "args": [
            {
              "name": "first",
              "description": "Returns up to the first `n` elements from the list.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "StringConnection"
          }
        },
        {
          "name": "products",
          "description": "List of the shop’s products.",
          "args": [
            {
              "name": "first",
              "description": "Returns up to the first `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "after",
              "description": "Returns the elements that come after the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "last",
              "description": "Returns up to the last `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "before",
              "description": "Returns the elements that come before the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "reverse",
              "description": "Reverse the order of the underlying list.",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": "false"
            },
            {
              "name": "sortKey",
              "description": "Sort the underlying list by the given key.",
              "type": {
                "kind": "ENUM",
                "name": "ProductSortKeys",
                "ofType": null
              },
              "defaultValue": "ID"
            },
            {
              "name": "query",
              "description": "Supported filter parameters:\n - `available_for_sale`\n - `created_at`\n - `product_type`\n - `tag`\n - `title`\n - `updated_at`\n - `variants.price`\n - `vendor`\n\nSee the detailed [search syntax](https://help.shopify.com/api/getting-started/search-syntax).\n",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "ProductConnection"
          }
        },
        {
          "name": "refundPolicy",
          "description": "The shop’s refund policy.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "ShopPolicy"
          }
        },
        {
          "name": "shipsToCountries",
          "description": "Countries that the shop ships to.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "ENUM",
            "name": "CountryCode"
          }
        },
        {
          "name": "shopifyPaymentsAccountId",
          "description": "The shop’s Shopify Payments account id.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "termsOfService",
          "description": "The shop’s terms of service.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "ShopPolicy"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "PaymentSettings",
      "kind": "OBJECT",
      "description": "Settings related to payments.",
      "fields": [
        {
          "name": "acceptedCardBrands",
          "description": "List of the card brands which the shop accepts.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "ENUM",
            "name": "CardBrand"
          }
        },
        {
          "name": "cardVaultUrl",
          "description": "The url pointing to the endpoint to vault credit cards.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "URL"
          }
        },
        {
          "name": "countryCode",
          "description": "The country where the shop is located.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "ENUM",
            "name": "CountryCode"
          }
        },
        {
          "name": "currencyCode",
          "description": "The three-letter code for the shop's primary currency.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "ENUM",
            "name": "CurrencyCode"
          }
        },
        {
          "name": "enabledPresentmentCurrencies",
          "description": "A list of enabled currencies (ISO 4217 format) that the shop accepts. Merchants can enable currencies from their Shopify Payments settings in the Shopify admin.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "ENUM",
            "name": "CurrencyCode"
          }
        },
        {
          "name": "shopifyPaymentsAccountId",
          "description": "The shop’s Shopify Payments account id.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "supportedDigitalWallets",
          "description": "List of the digital wallets which the shop supports.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "ENUM",
            "name": "DigitalWallet"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "Domain",
      "kind": "OBJECT",
      "description": "Represents a web address.",
      "fields": [
        {
          "name": "host",
          "description": "The host name of the domain (eg: `example.com`).",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "sslEnabled",
          "description": "Whether SSL is enabled or not.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Boolean"
          }
        },
        {
          "name": "url",
          "description": "The URL of the domain (eg: `https://example.com`).",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "URL"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "ShopPolicy",
      "kind": "OBJECT",
      "description": "Policy that a merchant has configured for their store, such as their refund or privacy policy.",
      "fields": [
        {
          "name": "body",
          "description": "Policy text, maximum size of 64kb.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "handle",
          "description": "Policy’s handle.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "id",
          "description": "Globally unique identifier.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "ID"
          }
        },
        {
          "name": "title",
          "description": "Policy’s title.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "url",
          "description": "Public URL to the policy.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "URL"
          }
        }
      ],
      "color": 2
    },
    {
      "name": "BlogConnection",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "edges",
          "description": "A list of edges.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "BlogEdge"
          }
        },
        {
          "name": "pageInfo",
          "description": "Information to aid in pagination.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "PageInfo"
          }
        }
      ],
      "color": 1
    },
    {
      "name": "BlogEdge",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "cursor",
          "description": "A cursor for use in pagination.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "node",
          "description": "The item at the end of BlogEdge.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "Blog"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "Blog",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "articleByHandle",
          "description": "Find an article by its handle.",
          "args": [
            {
              "name": "handle",
              "description": "The handle of the article.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Article"
          }
        },
        {
          "name": "articles",
          "description": "List of the blog's articles.",
          "args": [
            {
              "name": "first",
              "description": "Returns up to the first `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "after",
              "description": "Returns the elements that come after the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "last",
              "description": "Returns up to the last `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "before",
              "description": "Returns the elements that come before the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "reverse",
              "description": "Reverse the order of the underlying list.",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": "false"
            },
            {
              "name": "sortKey",
              "description": "Sort the underlying list by the given key.",
              "type": {
                "kind": "ENUM",
                "name": "ArticleSortKeys",
                "ofType": null
              },
              "defaultValue": "ID"
            },
            {
              "name": "query",
              "description": "Supported filter parameters:\n - `author`\n - `blog_title`\n - `created_at`\n - `tag`\n - `updated_at`\n\nSee the detailed [search syntax](https://help.shopify.com/api/getting-started/search-syntax).\n",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "ArticleConnection"
          }
        },
        {
          "name": "authors",
          "description": "The authors who have contributed to the blog.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "ArticleAuthor"
          }
        },
        {
          "name": "handle",
          "description": "A human-friendly unique string for the Blog automatically generated from its title.\n",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "id",
          "description": "Globally unique identifier.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "ID"
          }
        },
        {
          "name": "title",
          "description": "The blogs’s title.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "url",
          "description": "The url pointing to the blog accessible from the web.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "URL"
          }
        }
      ],
      "color": 2
    },
    {
      "name": "Article",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "author",
          "description": "The article's author.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "ArticleAuthor"
          }
        },
        {
          "name": "authorV2",
          "description": "The article's author.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "ArticleAuthor"
          }
        },
        {
          "name": "blog",
          "description": "The blog that the article belongs to.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "Blog"
          }
        },
        {
          "name": "comments",
          "description": "List of comments posted on the article.",
          "args": [
            {
              "name": "first",
              "description": "Returns up to the first `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "after",
              "description": "Returns the elements that come after the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "last",
              "description": "Returns up to the last `n` elements from the list.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "before",
              "description": "Returns the elements that come before the specified cursor.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "reverse",
              "description": "Reverse the order of the underlying list.",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": "false"
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "CommentConnection"
          }
        },
        {
          "name": "content",
          "description": "Stripped content of the article, single line with HTML tags removed.",
          "args": [
            {
              "name": "truncateAt",
              "description": "Truncates string after the given length.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "contentHtml",
          "description": "The content of the article, complete with HTML formatting.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "HTML"
          }
        },
        {
          "name": "excerpt",
          "description": "Stripped excerpt of the article, single line with HTML tags removed.",
          "args": [
            {
              "name": "truncateAt",
              "description": "Truncates string after the given length.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "excerptHtml",
          "description": "The excerpt of the article, complete with HTML formatting.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "HTML"
          }
        },
        {
          "name": "handle",
          "description": "A human-friendly unique string for the Article automatically generated from its title.\n",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "id",
          "description": "Globally unique identifier.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "ID"
          }
        },
        {
          "name": "image",
          "description": "The image associated with the article.",
          "args": [
            {
              "name": "maxWidth",
              "description": "Image width in pixels between 1 and 2048. This argument is deprecated: Use `maxWidth` on `Image.transformedSrc` instead.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "maxHeight",
              "description": "Image height in pixels between 1 and 2048. This argument is deprecated: Use `maxHeight` on `Image.transformedSrc` instead.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "crop",
              "description": "Crops the image according to the specified region. This argument is deprecated: Use `crop` on `Image.transformedSrc` instead.",
              "type": {
                "kind": "ENUM",
                "name": "CropRegion",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "scale",
              "description": "Image size multiplier for high-resolution retina displays. Must be between 1 and 3. This argument is deprecated: Use `scale` on `Image.transformedSrc` instead.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": "1"
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Image"
          }
        },
        {
          "name": "publishedAt",
          "description": "The date and time when the article was published.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "DateTime"
          }
        },
        {
          "name": "seo",
          "description": "The article’s SEO information.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "SEO"
          }
        },
        {
          "name": "tags",
          "description": "A categorization that a article can be tagged with.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "title",
          "description": "The article’s name.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "url",
          "description": "The url pointing to the article accessible from the web.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "URL"
          }
        }
      ],
      "color": 1
    },
    {
      "name": "ArticleAuthor",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "bio",
          "description": "The author's bio.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "email",
          "description": "The author’s email.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "firstName",
          "description": "The author's first name.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "lastName",
          "description": "The author's last name.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "name",
          "description": "The author's full name.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        }
      ],
      "color": 2
    },
    {
      "name": "SEO",
      "kind": "OBJECT",
      "description": "SEO information.",
      "fields": [
        {
          "name": "description",
          "description": "The meta description.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "title",
          "description": "The SEO title.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CommentConnection",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "edges",
          "description": "A list of edges.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CommentEdge"
          }
        },
        {
          "name": "pageInfo",
          "description": "Information to aid in pagination.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "PageInfo"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CommentEdge",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "cursor",
          "description": "A cursor for use in pagination.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "node",
          "description": "The item at the end of CommentEdge.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "Comment"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "Comment",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "author",
          "description": "The comment’s author.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "CommentAuthor"
          }
        },
        {
          "name": "content",
          "description": "Stripped content of the comment, single line with HTML tags removed.",
          "args": [
            {
              "name": "truncateAt",
              "description": "Truncates string after the given length.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "contentHtml",
          "description": "The content of the comment, complete with HTML formatting.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "HTML"
          }
        },
        {
          "name": "id",
          "description": "Globally unique identifier.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "ID"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CommentAuthor",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "email",
          "description": "The author's email.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "name",
          "description": "The author’s name.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "ArticleConnection",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "edges",
          "description": "A list of edges.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "ArticleEdge"
          }
        },
        {
          "name": "pageInfo",
          "description": "Information to aid in pagination.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "PageInfo"
          }
        }
      ],
      "color": 2
    },
    {
      "name": "ArticleEdge",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "cursor",
          "description": "A cursor for use in pagination.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "node",
          "description": "The item at the end of ArticleEdge.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "Article"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "StringConnection",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "edges",
          "description": "A list of edges.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "StringEdge"
          }
        },
        {
          "name": "pageInfo",
          "description": "Information to aid in pagination.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "PageInfo"
          }
        }
      ],
      "color": 3
    },
    {
      "name": "StringEdge",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "cursor",
          "description": "A cursor for use in pagination.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "node",
          "description": "The item at the end of StringEdge.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "Page",
      "kind": "OBJECT",
      "description": "Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store.",
      "fields": [
        {
          "name": "body",
          "description": "The description of the page, complete with HTML formatting.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "HTML"
          }
        },
        {
          "name": "bodySummary",
          "description": "Summary of the page body.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "createdAt",
          "description": "The timestamp of the page creation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "DateTime"
          }
        },
        {
          "name": "handle",
          "description": "A human-friendly unique string for the page automatically generated from its title.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "id",
          "description": "Globally unique identifier.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "ID"
          }
        },
        {
          "name": "title",
          "description": "The title of the page.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "updatedAt",
          "description": "The timestamp of the latest page update.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "DateTime"
          }
        },
        {
          "name": "url",
          "description": "The url pointing to the page accessible from the web.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "URL"
          }
        }
      ],
      "color": 1
    },
    {
      "name": "PageConnection",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "edges",
          "description": "A list of edges.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "PageEdge"
          }
        },
        {
          "name": "pageInfo",
          "description": "Information to aid in pagination.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "PageInfo"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "PageEdge",
      "kind": "OBJECT",
      "description": null,
      "fields": [
        {
          "name": "cursor",
          "description": "A cursor for use in pagination.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "node",
          "description": "The item at the end of PageEdge.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "Page"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "Mutation",
      "kind": "OBJECT",
      "description": "The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start.",
      "fields": [
        {
          "name": "checkoutAttributesUpdate",
          "description": "Updates the attributes of a checkout.",
          "args": [
            {
              "name": "checkoutId",
              "description": "The ID of the checkout.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "input",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CheckoutAttributesUpdateInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CheckoutAttributesUpdatePayload"
          }
        },
        {
          "name": "checkoutAttributesUpdateV2",
          "description": "Updates the attributes of a checkout.",
          "args": [
            {
              "name": "checkoutId",
              "description": "The ID of the checkout.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "input",
              "description": "The checkout attributes to update.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CheckoutAttributesUpdateV2Input",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CheckoutAttributesUpdateV2Payload"
          }
        },
        {
          "name": "checkoutCompleteFree",
          "description": null,
          "args": [
            {
              "name": "checkoutId",
              "description": "The ID of the checkout.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CheckoutCompleteFreePayload"
          }
        },
        {
          "name": "checkoutCompleteWithCreditCard",
          "description": "Completes a checkout using a credit card token from Shopify's Vault.",
          "args": [
            {
              "name": "checkoutId",
              "description": "The ID of the checkout.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "payment",
              "description": "The credit card info to apply as a payment.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CreditCardPaymentInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CheckoutCompleteWithCreditCardPayload"
          }
        },
        {
          "name": "checkoutCompleteWithCreditCardV2",
          "description": "Completes a checkout using a credit card token from Shopify's Vault.",
          "args": [
            {
              "name": "checkoutId",
              "description": "The ID of the checkout.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "payment",
              "description": "The credit card info to apply as a payment.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CreditCardPaymentInputV2",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CheckoutCompleteWithCreditCardV2Payload"
          }
        },
        {
          "name": "checkoutCompleteWithTokenizedPayment",
          "description": "Completes a checkout with a tokenized payment.",
          "args": [
            {
              "name": "checkoutId",
              "description": "The ID of the checkout.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "payment",
              "description": "The info to apply as a tokenized payment.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "TokenizedPaymentInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CheckoutCompleteWithTokenizedPaymentPayload"
          }
        },
        {
          "name": "checkoutCompleteWithTokenizedPaymentV2",
          "description": "Completes a checkout with a tokenized payment.",
          "args": [
            {
              "name": "checkoutId",
              "description": "The ID of the checkout.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "payment",
              "description": "The info to apply as a tokenized payment.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "TokenizedPaymentInputV2",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CheckoutCompleteWithTokenizedPaymentV2Payload"
          }
        },
        {
          "name": "checkoutCreate",
          "description": "Creates a new checkout.",
          "args": [
            {
              "name": "input",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CheckoutCreateInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CheckoutCreatePayload"
          }
        },
        {
          "name": "checkoutCustomerAssociate",
          "description": "Associates a customer to the checkout.",
          "args": [
            {
              "name": "checkoutId",
              "description": "The ID of the checkout.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "customerAccessToken",
              "description": "The customer access token of the customer to associate.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CheckoutCustomerAssociatePayload"
          }
        },
        {
          "name": "checkoutCustomerAssociateV2",
          "description": "Associates a customer to the checkout.",
          "args": [
            {
              "name": "checkoutId",
              "description": "The ID of the checkout.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "customerAccessToken",
              "description": "The customer access token of the customer to associate.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CheckoutCustomerAssociateV2Payload"
          }
        },
        {
          "name": "checkoutCustomerDisassociate",
          "description": "Disassociates the current checkout customer from the checkout.",
          "args": [
            {
              "name": "checkoutId",
              "description": "The ID of the checkout.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CheckoutCustomerDisassociatePayload"
          }
        },
        {
          "name": "checkoutCustomerDisassociateV2",
          "description": "Disassociates the current checkout customer from the checkout.",
          "args": [
            {
              "name": "checkoutId",
              "description": "The ID of the checkout.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CheckoutCustomerDisassociateV2Payload"
          }
        },
        {
          "name": "checkoutDiscountCodeApply",
          "description": "Applies a discount to an existing checkout using a discount code.",
          "args": [
            {
              "name": "discountCode",
              "description": "The discount code to apply to the checkout.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "checkoutId",
              "description": "The ID of the checkout.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CheckoutDiscountCodeApplyPayload"
          }
        },
        {
          "name": "checkoutDiscountCodeApplyV2",
          "description": "Applies a discount to an existing checkout using a discount code.",
          "args": [
            {
              "name": "discountCode",
              "description": "The discount code to apply to the checkout.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "checkoutId",
              "description": "The ID of the checkout.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CheckoutDiscountCodeApplyV2Payload"
          }
        },
        {
          "name": "checkoutDiscountCodeRemove",
          "description": "Removes the applied discount from an existing checkout.",
          "args": [
            {
              "name": "checkoutId",
              "description": "The ID of the checkout.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CheckoutDiscountCodeRemovePayload"
          }
        },
        {
          "name": "checkoutEmailUpdate",
          "description": "Updates the email on an existing checkout.",
          "args": [
            {
              "name": "checkoutId",
              "description": "The ID of the checkout.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "email",
              "description": "The email to update the checkout with.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CheckoutEmailUpdatePayload"
          }
        },
        {
          "name": "checkoutEmailUpdateV2",
          "description": "Updates the email on an existing checkout.",
          "args": [
            {
              "name": "checkoutId",
              "description": "The ID of the checkout.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "email",
              "description": "The email to update the checkout with.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CheckoutEmailUpdateV2Payload"
          }
        },
        {
          "name": "checkoutGiftCardApply",
          "description": "Applies a gift card to an existing checkout using a gift card code. This will replace all currently applied gift cards.",
          "args": [
            {
              "name": "giftCardCode",
              "description": "The code of the gift card to apply on the checkout.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "checkoutId",
              "description": "The ID of the checkout.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CheckoutGiftCardApplyPayload"
          }
        },
        {
          "name": "checkoutGiftCardRemove",
          "description": "Removes an applied gift card from the checkout.",
          "args": [
            {
              "name": "appliedGiftCardId",
              "description": "The ID of the Applied Gift Card to remove from the Checkout.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "checkoutId",
              "description": "The ID of the checkout.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CheckoutGiftCardRemovePayload"
          }
        },
        {
          "name": "checkoutGiftCardRemoveV2",
          "description": "Removes an applied gift card from the checkout.",
          "args": [
            {
              "name": "appliedGiftCardId",
              "description": "The ID of the Applied Gift Card to remove from the Checkout.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "checkoutId",
              "description": "The ID of the checkout.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CheckoutGiftCardRemoveV2Payload"
          }
        },
        {
          "name": "checkoutGiftCardsAppend",
          "description": "Appends gift cards to an existing checkout.",
          "args": [
            {
              "name": "giftCardCodes",
              "description": "A list of gift card codes to append to the checkout.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  }
                }
              },
              "defaultValue": null
            },
            {
              "name": "checkoutId",
              "description": "The ID of the checkout.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CheckoutGiftCardsAppendPayload"
          }
        },
        {
          "name": "checkoutLineItemsAdd",
          "description": "Adds a list of line items to a checkout.",
          "args": [
            {
              "name": "lineItems",
              "description": "A list of line item objects to add to the checkout.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "CheckoutLineItemInput",
                      "ofType": null
                    }
                  }
                }
              },
              "defaultValue": null
            },
            {
              "name": "checkoutId",
              "description": "The ID of the checkout.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CheckoutLineItemsAddPayload"
          }
        },
        {
          "name": "checkoutLineItemsRemove",
          "description": "Removes line items from an existing checkout",
          "args": [
            {
              "name": "checkoutId",
              "description": "the checkout on which to remove line items",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "lineItemIds",
              "description": "line item ids to remove",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  }
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CheckoutLineItemsRemovePayload"
          }
        },
        {
          "name": "checkoutLineItemsReplace",
          "description": "Sets a list of line items to a checkout.",
          "args": [
            {
              "name": "lineItems",
              "description": "A list of line item objects to set on the checkout.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "CheckoutLineItemInput",
                      "ofType": null
                    }
                  }
                }
              },
              "defaultValue": null
            },
            {
              "name": "checkoutId",
              "description": "The ID of the checkout.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CheckoutLineItemsReplacePayload"
          }
        },
        {
          "name": "checkoutLineItemsUpdate",
          "description": "Updates line items on a checkout.",
          "args": [
            {
              "name": "checkoutId",
              "description": "the checkout on which to update line items.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "lineItems",
              "description": "line items to update.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "CheckoutLineItemUpdateInput",
                      "ofType": null
                    }
                  }
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CheckoutLineItemsUpdatePayload"
          }
        },
        {
          "name": "checkoutShippingAddressUpdate",
          "description": "Updates the shipping address of an existing checkout.",
          "args": [
            {
              "name": "shippingAddress",
              "description": "The shipping address to where the line items will be shipped.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "MailingAddressInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "checkoutId",
              "description": "The ID of the checkout.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CheckoutShippingAddressUpdatePayload"
          }
        },
        {
          "name": "checkoutShippingAddressUpdateV2",
          "description": "Updates the shipping address of an existing checkout.",
          "args": [
            {
              "name": "shippingAddress",
              "description": "The shipping address to where the line items will be shipped.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "MailingAddressInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "checkoutId",
              "description": "The ID of the checkout.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CheckoutShippingAddressUpdateV2Payload"
          }
        },
        {
          "name": "checkoutShippingLineUpdate",
          "description": "Updates the shipping lines on an existing checkout.",
          "args": [
            {
              "name": "checkoutId",
              "description": "The ID of the checkout.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "shippingRateHandle",
              "description": "A concatenation of a Checkout’s shipping provider, price, and title, enabling the customer to select the availableShippingRates.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CheckoutShippingLineUpdatePayload"
          }
        },
        {
          "name": "customerAccessTokenCreate",
          "description": "Creates a customer access token.\nThe customer access token is required to modify the customer object in any way.\n",
          "args": [
            {
              "name": "input",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CustomerAccessTokenCreateInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CustomerAccessTokenCreatePayload"
          }
        },
        {
          "name": "customerAccessTokenDelete",
          "description": "Permanently destroys a customer access token.",
          "args": [
            {
              "name": "customerAccessToken",
              "description": "The access token used to identify the customer.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CustomerAccessTokenDeletePayload"
          }
        },
        {
          "name": "customerAccessTokenRenew",
          "description": "Renews a customer access token.\n\nAccess token renewal must happen *before* a token expires.\nIf a token has already expired, a new one should be created instead via `customerAccessTokenCreate`.\n",
          "args": [
            {
              "name": "customerAccessToken",
              "description": "The access token used to identify the customer.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CustomerAccessTokenRenewPayload"
          }
        },
        {
          "name": "customerActivate",
          "description": "Activates a customer.",
          "args": [
            {
              "name": "id",
              "description": "Specifies the customer to activate.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "input",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CustomerActivateInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CustomerActivatePayload"
          }
        },
        {
          "name": "customerAddressCreate",
          "description": "Creates a new address for a customer.",
          "args": [
            {
              "name": "customerAccessToken",
              "description": "The access token used to identify the customer.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": "The customer mailing address to create.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "MailingAddressInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CustomerAddressCreatePayload"
          }
        },
        {
          "name": "customerAddressDelete",
          "description": "Permanently deletes the address of an existing customer.",
          "args": [
            {
              "name": "id",
              "description": "Specifies the address to delete.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "customerAccessToken",
              "description": "The access token used to identify the customer.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CustomerAddressDeletePayload"
          }
        },
        {
          "name": "customerAddressUpdate",
          "description": "Updates the address of an existing customer.",
          "args": [
            {
              "name": "customerAccessToken",
              "description": "The access token used to identify the customer.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": "Specifies the customer address to update.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": "The customer’s mailing address.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "MailingAddressInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CustomerAddressUpdatePayload"
          }
        },
        {
          "name": "customerCreate",
          "description": "Creates a new customer.",
          "args": [
            {
              "name": "input",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CustomerCreateInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CustomerCreatePayload"
          }
        },
        {
          "name": "customerDefaultAddressUpdate",
          "description": "Updates the default address of an existing customer.",
          "args": [
            {
              "name": "customerAccessToken",
              "description": "The access token used to identify the customer.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "addressId",
              "description": "ID of the address to set as the new default for the customer.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CustomerDefaultAddressUpdatePayload"
          }
        },
        {
          "name": "customerRecover",
          "description": "Sends a reset password email to the customer, as the first step in the reset password process.",
          "args": [
            {
              "name": "email",
              "description": "The email address of the customer to recover.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CustomerRecoverPayload"
          }
        },
        {
          "name": "customerReset",
          "description": "Resets a customer’s password with a token received from `CustomerRecover`.",
          "args": [
            {
              "name": "id",
              "description": "Specifies the customer to reset.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "input",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CustomerResetInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CustomerResetPayload"
          }
        },
        {
          "name": "customerResetByUrl",
          "description": "Resets a customer’s password with the reset password url received from `CustomerRecover`.",
          "args": [
            {
              "name": "resetUrl",
              "description": "The customer's reset password url.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "URL",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "password",
              "description": "New password that will be set as part of the reset password process.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CustomerResetByUrlPayload"
          }
        },
        {
          "name": "customerUpdate",
          "description": "Updates an existing customer.",
          "args": [
            {
              "name": "customerAccessToken",
              "description": "The access token used to identify the customer.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "customer",
              "description": "The customer object input.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CustomerUpdateInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CustomerUpdatePayload"
          }
        }
      ]
    },
    {
      "name": "CheckoutAttributesUpdatePayload",
      "kind": "OBJECT",
      "description": "Return type for `checkoutAttributesUpdate` mutation.",
      "fields": [
        {
          "name": "checkout",
          "description": "The updated checkout object.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "Checkout"
          }
        },
        {
          "name": "checkoutUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CheckoutUserError"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "UserError",
      "kind": "OBJECT",
      "description": "Represents an error in the input of a mutation.",
      "fields": [
        {
          "name": "field",
          "description": "Path to the input field which caused the error.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isList": true,
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "message",
          "description": "The error message.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        }
      ],
      "color": 39
    },
    {
      "name": "DisplayableError",
      "kind": "INTERFACE",
      "description": "Represents an error in the input of a mutation.",
      "fields": [
        {
          "name": "field",
          "description": "Path to the input field which caused the error.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isList": true,
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "message",
          "description": "The error message.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        }
      ]
    },
    {
      "name": "CheckoutUserError",
      "kind": "OBJECT",
      "description": "Represents an error that happens during execution of a checkout mutation.",
      "fields": [
        {
          "name": "code",
          "description": "Error code to uniquely identify the error.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "ENUM",
            "name": "CheckoutErrorCode"
          }
        },
        {
          "name": "field",
          "description": "Path to the input field which caused the error.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isList": true,
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "message",
          "description": "The error message.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        }
      ],
      "color": 26
    },
    {
      "name": "CheckoutCompleteWithCreditCardPayload",
      "kind": "OBJECT",
      "description": "Return type for `checkoutCompleteWithCreditCard` mutation.",
      "fields": [
        {
          "name": "checkout",
          "description": "The checkout on which the payment was applied.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "Checkout"
          }
        },
        {
          "name": "checkoutUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CheckoutUserError"
          }
        },
        {
          "name": "payment",
          "description": "A representation of the attempted payment.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Payment"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "Payment",
      "kind": "OBJECT",
      "description": "A payment applied to a checkout.",
      "fields": [
        {
          "name": "amount",
          "description": "The amount of the payment.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Money"
          }
        },
        {
          "name": "billingAddress",
          "description": "The billing address for the payment.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "MailingAddress"
          }
        },
        {
          "name": "checkout",
          "description": "The checkout to which the payment belongs.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "Checkout"
          }
        },
        {
          "name": "creditCard",
          "description": "The credit card used for the payment in the case of direct payments.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CreditCard"
          }
        },
        {
          "name": "errorMessage",
          "description": "An message describing a processing error during asynchronous processing.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "id",
          "description": "Globally unique identifier.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "ID"
          }
        },
        {
          "name": "idempotencyKey",
          "description": "A client-side generated token to identify a payment and perform idempotent operations.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "ready",
          "description": "Whether or not the payment is still processing asynchronously.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Boolean"
          }
        },
        {
          "name": "test",
          "description": "A flag to indicate if the payment is to be done in test mode for gateways that support it.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Boolean"
          }
        },
        {
          "name": "transaction",
          "description": "The actual transaction recorded by Shopify after having processed the payment with the gateway.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Transaction"
          }
        }
      ],
      "color": 3
    },
    {
      "name": "CreditCard",
      "kind": "OBJECT",
      "description": "Credit card information used for a payment.",
      "fields": [
        {
          "name": "brand",
          "description": null,
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "expiryMonth",
          "description": null,
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "Int"
          }
        },
        {
          "name": "expiryYear",
          "description": null,
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "Int"
          }
        },
        {
          "name": "firstDigits",
          "description": null,
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "firstName",
          "description": null,
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "lastDigits",
          "description": null,
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "lastName",
          "description": null,
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "maskedNumber",
          "description": "Masked credit card number with only the last 4 digits displayed",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "Transaction",
      "kind": "OBJECT",
      "description": "An object representing exchange of money for a product or service.",
      "fields": [
        {
          "name": "amount",
          "description": "The amount of money that the transaction was for.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Money"
          }
        },
        {
          "name": "kind",
          "description": "The kind of the transaction.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "ENUM",
            "name": "TransactionKind"
          }
        },
        {
          "name": "status",
          "description": "The status of the transaction.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "ENUM",
            "name": "TransactionStatus"
          }
        },
        {
          "name": "statusV2",
          "description": "The status of the transaction.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "ENUM",
            "name": "TransactionStatus"
          }
        },
        {
          "name": "test",
          "description": "Whether the transaction was done in test mode or not.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Boolean"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CheckoutCompleteWithTokenizedPaymentPayload",
      "kind": "OBJECT",
      "description": "Return type for `checkoutCompleteWithTokenizedPayment` mutation.",
      "fields": [
        {
          "name": "checkout",
          "description": "The checkout on which the payment was applied.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "Checkout"
          }
        },
        {
          "name": "checkoutUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CheckoutUserError"
          }
        },
        {
          "name": "payment",
          "description": "A representation of the attempted payment.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Payment"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CheckoutCustomerAssociatePayload",
      "kind": "OBJECT",
      "description": "Return type for `checkoutCustomerAssociate` mutation.",
      "fields": [
        {
          "name": "checkout",
          "description": "The updated checkout object.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "Checkout"
          }
        },
        {
          "name": "customer",
          "description": "The associated customer object.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Customer"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CheckoutCustomerDisassociatePayload",
      "kind": "OBJECT",
      "description": "Return type for `checkoutCustomerDisassociate` mutation.",
      "fields": [
        {
          "name": "checkout",
          "description": "The updated checkout object.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "Checkout"
          }
        },
        {
          "name": "checkoutUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CheckoutUserError"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CheckoutDiscountCodeApplyPayload",
      "kind": "OBJECT",
      "description": "Return type for `checkoutDiscountCodeApply` mutation.",
      "fields": [
        {
          "name": "checkout",
          "description": "The updated checkout object.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "Checkout"
          }
        },
        {
          "name": "checkoutUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CheckoutUserError"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CheckoutEmailUpdatePayload",
      "kind": "OBJECT",
      "description": "Return type for `checkoutEmailUpdate` mutation.",
      "fields": [
        {
          "name": "checkout",
          "description": "The checkout object with the updated email.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "Checkout"
          }
        },
        {
          "name": "checkoutUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CheckoutUserError"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CheckoutGiftCardApplyPayload",
      "kind": "OBJECT",
      "description": "Return type for `checkoutGiftCardApply` mutation.",
      "fields": [
        {
          "name": "checkout",
          "description": "The updated checkout object.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "Checkout"
          }
        },
        {
          "name": "checkoutUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CheckoutUserError"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CheckoutGiftCardRemovePayload",
      "kind": "OBJECT",
      "description": "Return type for `checkoutGiftCardRemove` mutation.",
      "fields": [
        {
          "name": "checkout",
          "description": "The updated checkout object.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "Checkout"
          }
        },
        {
          "name": "checkoutUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CheckoutUserError"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CheckoutShippingAddressUpdatePayload",
      "kind": "OBJECT",
      "description": "Return type for `checkoutShippingAddressUpdate` mutation.",
      "fields": [
        {
          "name": "checkout",
          "description": "The updated checkout object.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "OBJECT",
            "name": "Checkout"
          }
        },
        {
          "name": "checkoutUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CheckoutUserError"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CheckoutAttributesUpdateV2Payload",
      "kind": "OBJECT",
      "description": "Return type for `checkoutAttributesUpdateV2` mutation.",
      "fields": [
        {
          "name": "checkout",
          "description": "The updated checkout object.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Checkout"
          }
        },
        {
          "name": "checkoutUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CheckoutUserError"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CheckoutCompleteWithCreditCardV2Payload",
      "kind": "OBJECT",
      "description": "Return type for `checkoutCompleteWithCreditCardV2` mutation.",
      "fields": [
        {
          "name": "checkout",
          "description": "The checkout on which the payment was applied.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Checkout"
          }
        },
        {
          "name": "checkoutUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CheckoutUserError"
          }
        },
        {
          "name": "payment",
          "description": "A representation of the attempted payment.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Payment"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CheckoutCompleteWithTokenizedPaymentV2Payload",
      "kind": "OBJECT",
      "description": "Return type for `checkoutCompleteWithTokenizedPaymentV2` mutation.",
      "fields": [
        {
          "name": "checkout",
          "description": "The checkout on which the payment was applied.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Checkout"
          }
        },
        {
          "name": "checkoutUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CheckoutUserError"
          }
        },
        {
          "name": "payment",
          "description": "A representation of the attempted payment.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Payment"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CheckoutCustomerAssociateV2Payload",
      "kind": "OBJECT",
      "description": "Return type for `checkoutCustomerAssociateV2` mutation.",
      "fields": [
        {
          "name": "checkout",
          "description": "The updated checkout object.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Checkout"
          }
        },
        {
          "name": "checkoutUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CheckoutUserError"
          }
        },
        {
          "name": "customer",
          "description": "The associated customer object.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Customer"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CheckoutCustomerDisassociateV2Payload",
      "kind": "OBJECT",
      "description": "Return type for `checkoutCustomerDisassociateV2` mutation.",
      "fields": [
        {
          "name": "checkout",
          "description": "The updated checkout object.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Checkout"
          }
        },
        {
          "name": "checkoutUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CheckoutUserError"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CheckoutDiscountCodeApplyV2Payload",
      "kind": "OBJECT",
      "description": "Return type for `checkoutDiscountCodeApplyV2` mutation.",
      "fields": [
        {
          "name": "checkout",
          "description": "The updated checkout object.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Checkout"
          }
        },
        {
          "name": "checkoutUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CheckoutUserError"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CheckoutCompleteFreePayload",
      "kind": "OBJECT",
      "description": "Return type for `checkoutCompleteFree` mutation.",
      "fields": [
        {
          "name": "checkout",
          "description": "The updated checkout object.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Checkout"
          }
        },
        {
          "name": "checkoutUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CheckoutUserError"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CheckoutCreatePayload",
      "kind": "OBJECT",
      "description": "Return type for `checkoutCreate` mutation.",
      "fields": [
        {
          "name": "checkout",
          "description": "The new checkout object.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Checkout"
          }
        },
        {
          "name": "checkoutUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CheckoutUserError"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CheckoutEmailUpdateV2Payload",
      "kind": "OBJECT",
      "description": "Return type for `checkoutEmailUpdateV2` mutation.",
      "fields": [
        {
          "name": "checkout",
          "description": "The checkout object with the updated email.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Checkout"
          }
        },
        {
          "name": "checkoutUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CheckoutUserError"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CheckoutDiscountCodeRemovePayload",
      "kind": "OBJECT",
      "description": "Return type for `checkoutDiscountCodeRemove` mutation.",
      "fields": [
        {
          "name": "checkout",
          "description": "The updated checkout object.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Checkout"
          }
        },
        {
          "name": "checkoutUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CheckoutUserError"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CheckoutGiftCardsAppendPayload",
      "kind": "OBJECT",
      "description": "Return type for `checkoutGiftCardsAppend` mutation.",
      "fields": [
        {
          "name": "checkout",
          "description": "The updated checkout object.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Checkout"
          }
        },
        {
          "name": "checkoutUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CheckoutUserError"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CheckoutGiftCardRemoveV2Payload",
      "kind": "OBJECT",
      "description": "Return type for `checkoutGiftCardRemoveV2` mutation.",
      "fields": [
        {
          "name": "checkout",
          "description": "The updated checkout object.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Checkout"
          }
        },
        {
          "name": "checkoutUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CheckoutUserError"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CheckoutLineItemsAddPayload",
      "kind": "OBJECT",
      "description": "Return type for `checkoutLineItemsAdd` mutation.",
      "fields": [
        {
          "name": "checkout",
          "description": "The updated checkout object.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Checkout"
          }
        },
        {
          "name": "checkoutUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CheckoutUserError"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CheckoutLineItemsRemovePayload",
      "kind": "OBJECT",
      "description": "Return type for `checkoutLineItemsRemove` mutation.",
      "fields": [
        {
          "name": "checkout",
          "description": null,
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Checkout"
          }
        },
        {
          "name": "checkoutUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CheckoutUserError"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CheckoutLineItemsUpdatePayload",
      "kind": "OBJECT",
      "description": "Return type for `checkoutLineItemsUpdate` mutation.",
      "fields": [
        {
          "name": "checkout",
          "description": "The updated checkout object.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Checkout"
          }
        },
        {
          "name": "checkoutUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CheckoutUserError"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CheckoutLineItemsReplacePayload",
      "kind": "OBJECT",
      "description": "Return type for `checkoutLineItemsReplace` mutation.",
      "fields": [
        {
          "name": "checkout",
          "description": "The updated checkout object.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Checkout"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CheckoutUserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CheckoutShippingAddressUpdateV2Payload",
      "kind": "OBJECT",
      "description": "Return type for `checkoutShippingAddressUpdateV2` mutation.",
      "fields": [
        {
          "name": "checkout",
          "description": "The updated checkout object.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Checkout"
          }
        },
        {
          "name": "checkoutUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CheckoutUserError"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CheckoutShippingLineUpdatePayload",
      "kind": "OBJECT",
      "description": "Return type for `checkoutShippingLineUpdate` mutation.",
      "fields": [
        {
          "name": "checkout",
          "description": "The updated checkout object.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Checkout"
          }
        },
        {
          "name": "checkoutUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CheckoutUserError"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CustomerAccessTokenCreatePayload",
      "kind": "OBJECT",
      "description": "Return type for `customerAccessTokenCreate` mutation.",
      "fields": [
        {
          "name": "customerAccessToken",
          "description": "The newly created customer access token object.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CustomerAccessToken"
          }
        },
        {
          "name": "customerUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CustomerUserError"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CustomerUserError",
      "kind": "OBJECT",
      "description": "Represents an error that happens during execution of a customer mutation.",
      "fields": [
        {
          "name": "code",
          "description": "Error code to uniquely identify the error.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "ENUM",
            "name": "CustomerErrorCode"
          }
        },
        {
          "name": "field",
          "description": "Path to the input field which caused the error.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isList": true,
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "message",
          "description": "The error message.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        }
      ],
      "color": 10
    },
    {
      "name": "CustomerAccessToken",
      "kind": "OBJECT",
      "description": "A CustomerAccessToken represents the unique token required to make modifications to the customer object.",
      "fields": [
        {
          "name": "accessToken",
          "description": "The customer’s access token.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "expiresAt",
          "description": "The date and time when the customer access token expires.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "DateTime"
          }
        }
      ],
      "color": 5
    },
    {
      "name": "CustomerAccessTokenDeletePayload",
      "kind": "OBJECT",
      "description": "Return type for `customerAccessTokenDelete` mutation.",
      "fields": [
        {
          "name": "deletedAccessToken",
          "description": "The destroyed access token.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "deletedCustomerAccessTokenId",
          "description": "ID of the destroyed customer access token.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CustomerAccessTokenRenewPayload",
      "kind": "OBJECT",
      "description": "Return type for `customerAccessTokenRenew` mutation.",
      "fields": [
        {
          "name": "customerAccessToken",
          "description": "The renewed customer access token object.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CustomerAccessToken"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CustomerActivatePayload",
      "kind": "OBJECT",
      "description": "Return type for `customerActivate` mutation.",
      "fields": [
        {
          "name": "customer",
          "description": "The customer object.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Customer"
          }
        },
        {
          "name": "customerAccessToken",
          "description": "A newly created customer access token object for the customer.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CustomerAccessToken"
          }
        },
        {
          "name": "customerUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CustomerUserError"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CustomerAddressCreatePayload",
      "kind": "OBJECT",
      "description": "Return type for `customerAddressCreate` mutation.",
      "fields": [
        {
          "name": "customerAddress",
          "description": "The new customer address object.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "MailingAddress"
          }
        },
        {
          "name": "customerUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CustomerUserError"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CustomerAddressDeletePayload",
      "kind": "OBJECT",
      "description": "Return type for `customerAddressDelete` mutation.",
      "fields": [
        {
          "name": "customerUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CustomerUserError"
          }
        },
        {
          "name": "deletedCustomerAddressId",
          "description": "ID of the deleted customer address.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CustomerAddressUpdatePayload",
      "kind": "OBJECT",
      "description": "Return type for `customerAddressUpdate` mutation.",
      "fields": [
        {
          "name": "customerAddress",
          "description": "The customer’s updated mailing address.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "MailingAddress"
          }
        },
        {
          "name": "customerUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CustomerUserError"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CustomerCreatePayload",
      "kind": "OBJECT",
      "description": "Return type for `customerCreate` mutation.",
      "fields": [
        {
          "name": "customer",
          "description": "The created customer object.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Customer"
          }
        },
        {
          "name": "customerUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CustomerUserError"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CustomerDefaultAddressUpdatePayload",
      "kind": "OBJECT",
      "description": "Return type for `customerDefaultAddressUpdate` mutation.",
      "fields": [
        {
          "name": "customer",
          "description": "The updated customer object.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Customer"
          }
        },
        {
          "name": "customerUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CustomerUserError"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CustomerRecoverPayload",
      "kind": "OBJECT",
      "description": "Return type for `customerRecover` mutation.",
      "fields": [
        {
          "name": "customerUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CustomerUserError"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CustomerResetPayload",
      "kind": "OBJECT",
      "description": "Return type for `customerReset` mutation.",
      "fields": [
        {
          "name": "customer",
          "description": "The customer object which was reset.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Customer"
          }
        },
        {
          "name": "customerAccessToken",
          "description": "A newly created customer access token object for the customer.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CustomerAccessToken"
          }
        },
        {
          "name": "customerUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CustomerUserError"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CustomerResetByUrlPayload",
      "kind": "OBJECT",
      "description": "Return type for `customerResetByUrl` mutation.",
      "fields": [
        {
          "name": "customer",
          "description": "The customer object which was reset.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Customer"
          }
        },
        {
          "name": "customerAccessToken",
          "description": "A newly created customer access token object for the customer.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CustomerAccessToken"
          }
        },
        {
          "name": "customerUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CustomerUserError"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "CustomerUpdatePayload",
      "kind": "OBJECT",
      "description": "Return type for `customerUpdate` mutation.",
      "fields": [
        {
          "name": "customer",
          "description": "The updated customer object.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "Customer"
          }
        },
        {
          "name": "customerAccessToken",
          "description": "The newly created customer access token. If the customer's password is updated, all previous access tokens\n(including the one used to perform this mutation) become invalid, and a new token is generated.\n",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "OBJECT",
            "name": "CustomerAccessToken"
          }
        },
        {
          "name": "customerUserErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "CustomerUserError"
          }
        },
        {
          "name": "userErrors",
          "description": "List of errors that occurred executing the mutation.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "isList": true,
            "kind": "OBJECT",
            "name": "UserError"
          }
        }
      ],
      "color": 0
    },
    {
      "name": "DiscountCodeApplication",
      "kind": "OBJECT",
      "description": "Discount code applications capture the intentions of a discount code at\nthe time that it is applied.\n",
      "fields": [
        {
          "name": "allocationMethod",
          "description": "The method by which the discount's value is allocated to its entitled items.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "ENUM",
            "name": "DiscountApplicationAllocationMethod"
          }
        },
        {
          "name": "applicable",
          "description": "Specifies whether the discount code was applied successfully.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "Boolean"
          }
        },
        {
          "name": "code",
          "description": "The string identifying the discount code that was used at the time of application.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "targetSelection",
          "description": "Which lines of targetType that the discount is allocated over.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "ENUM",
            "name": "DiscountApplicationTargetSelection"
          }
        },
        {
          "name": "targetType",
          "description": "The type of line that the discount is applicable towards.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "ENUM",
            "name": "DiscountApplicationTargetType"
          }
        },
        {
          "name": "value",
          "description": "The value of the discount application.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "UNION",
            "name": "PricingValue"
          }
        }
      ]
    },
    {
      "name": "ManualDiscountApplication",
      "kind": "OBJECT",
      "description": "Manual discount applications capture the intentions of a discount that was manually created.\n",
      "fields": [
        {
          "name": "allocationMethod",
          "description": "The method by which the discount's value is allocated to its entitled items.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "ENUM",
            "name": "DiscountApplicationAllocationMethod"
          }
        },
        {
          "name": "description",
          "description": "The description of the application.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "targetSelection",
          "description": "Which lines of targetType that the discount is allocated over.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "ENUM",
            "name": "DiscountApplicationTargetSelection"
          }
        },
        {
          "name": "targetType",
          "description": "The type of line that the discount is applicable towards.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "ENUM",
            "name": "DiscountApplicationTargetType"
          }
        },
        {
          "name": "title",
          "description": "The title of the application.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "value",
          "description": "The value of the discount application.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "UNION",
            "name": "PricingValue"
          }
        }
      ]
    },
    {
      "name": "ScriptDiscountApplication",
      "kind": "OBJECT",
      "description": "Script discount applications capture the intentions of a discount that\nwas created by a Shopify Script.\n",
      "fields": [
        {
          "name": "allocationMethod",
          "description": "The method by which the discount's value is allocated to its entitled items.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "ENUM",
            "name": "DiscountApplicationAllocationMethod"
          }
        },
        {
          "name": "description",
          "description": "The description of the application as defined by the Script.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "targetSelection",
          "description": "Which lines of targetType that the discount is allocated over.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "ENUM",
            "name": "DiscountApplicationTargetSelection"
          }
        },
        {
          "name": "targetType",
          "description": "The type of line that the discount is applicable towards.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "ENUM",
            "name": "DiscountApplicationTargetType"
          }
        },
        {
          "name": "title",
          "description": "The title of the application as defined by the Script.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "value",
          "description": "The value of the discount application.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "UNION",
            "name": "PricingValue"
          }
        }
      ]
    },
    {
      "name": "AutomaticDiscountApplication",
      "kind": "OBJECT",
      "description": "Automatic discount applications capture the intentions of a discount that was automatically applied.\n",
      "fields": [
        {
          "name": "allocationMethod",
          "description": "The method by which the discount's value is allocated to its entitled items.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "ENUM",
            "name": "DiscountApplicationAllocationMethod"
          }
        },
        {
          "name": "targetSelection",
          "description": "Which lines of targetType that the discount is allocated over.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "ENUM",
            "name": "DiscountApplicationTargetSelection"
          }
        },
        {
          "name": "targetType",
          "description": "The type of line that the discount is applicable towards.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "ENUM",
            "name": "DiscountApplicationTargetType"
          }
        },
        {
          "name": "title",
          "description": "The title of the application.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "SCALAR",
            "name": "String"
          }
        },
        {
          "name": "value",
          "description": "The value of the discount application.",
          "args": [],
          "isRequired": false,
          "isList": false,
          "type": {
            "isRequired": true,
            "kind": "UNION",
            "name": "PricingValue"
          }
        }
      ]
    }
  ],
  "links": [
    {
      "source": "QueryRoot",
      "target": "ArticleConnection"
    },
    {
      "source": "QueryRoot",
      "target": "Blog"
    },
    {
      "source": "QueryRoot",
      "target": "BlogConnection"
    },
    {
      "source": "QueryRoot",
      "target": "Collection"
    },
    {
      "source": "QueryRoot",
      "target": "CollectionConnection"
    },
    {
      "source": "QueryRoot",
      "target": "Customer"
    },
    {
      "source": "QueryRoot",
      "target": "Page"
    },
    {
      "source": "QueryRoot",
      "target": "PageConnection"
    },
    {
      "source": "QueryRoot",
      "target": "Product"
    },
    {
      "source": "QueryRoot",
      "target": "StringConnection"
    },
    {
      "source": "QueryRoot",
      "target": "StringConnection"
    },
    {
      "source": "QueryRoot",
      "target": "ProductConnection"
    },
    {
      "source": "QueryRoot",
      "target": "Shop"
    },
    {
      "source": "Customer",
      "target": "MailingAddressConnection"
    },
    {
      "source": "Customer",
      "target": "MailingAddress"
    },
    {
      "source": "Customer",
      "target": "Checkout"
    },
    {
      "source": "Customer",
      "target": "OrderConnection"
    },
    {
      "source": "MailingAddressConnection",
      "target": "MailingAddressEdge"
    },
    {
      "source": "MailingAddressConnection",
      "target": "PageInfo"
    },
    {
      "source": "MailingAddressEdge",
      "target": "MailingAddress"
    },
    {
      "source": "OrderConnection",
      "target": "OrderEdge"
    },
    {
      "source": "OrderConnection",
      "target": "PageInfo"
    },
    {
      "source": "OrderEdge",
      "target": "Order"
    },
    {
      "source": "Order",
      "target": "DiscountApplicationConnection"
    },
    {
      "source": "Order",
      "target": "OrderLineItemConnection"
    },
    {
      "source": "Order",
      "target": "MailingAddress"
    },
    {
      "source": "Order",
      "target": "DiscountAllocation"
    },
    {
      "source": "Order",
      "target": "MoneyV2"
    },
    {
      "source": "Order",
      "target": "Fulfillment"
    },
    {
      "source": "Order",
      "target": "MoneyV2"
    },
    {
      "source": "Order",
      "target": "MoneyV2"
    },
    {
      "source": "Order",
      "target": "MoneyV2"
    },
    {
      "source": "Order",
      "target": "MoneyV2"
    },
    {
      "source": "DiscountAllocation",
      "target": "MoneyV2"
    },
    {
      "source": "OrderLineItemConnection",
      "target": "OrderLineItemEdge"
    },
    {
      "source": "OrderLineItemConnection",
      "target": "PageInfo"
    },
    {
      "source": "OrderLineItemEdge",
      "target": "OrderLineItem"
    },
    {
      "source": "OrderLineItem",
      "target": "Attribute"
    },
    {
      "source": "OrderLineItem",
      "target": "DiscountAllocation"
    },
    {
      "source": "OrderLineItem",
      "target": "ProductVariant"
    },
    {
      "source": "ProductVariant",
      "target": "MoneyV2"
    },
    {
      "source": "ProductVariant",
      "target": "Image"
    },
    {
      "source": "ProductVariant",
      "target": "ProductVariantPricePairConnection"
    },
    {
      "source": "ProductVariant",
      "target": "MoneyV2"
    },
    {
      "source": "ProductVariant",
      "target": "Product"
    },
    {
      "source": "ProductVariant",
      "target": "SelectedOption"
    },
    {
      "source": "Product",
      "target": "CollectionConnection"
    },
    {
      "source": "Product",
      "target": "ImageConnection"
    },
    {
      "source": "Product",
      "target": "ProductOption"
    },
    {
      "source": "Product",
      "target": "ProductPriceRange"
    },
    {
      "source": "Product",
      "target": "ProductVariant"
    },
    {
      "source": "Product",
      "target": "ProductVariantConnection"
    },
    {
      "source": "CollectionConnection",
      "target": "CollectionEdge"
    },
    {
      "source": "CollectionConnection",
      "target": "PageInfo"
    },
    {
      "source": "CollectionEdge",
      "target": "Collection"
    },
    {
      "source": "Collection",
      "target": "Image"
    },
    {
      "source": "Collection",
      "target": "ProductConnection"
    },
    {
      "source": "ProductConnection",
      "target": "ProductEdge"
    },
    {
      "source": "ProductConnection",
      "target": "PageInfo"
    },
    {
      "source": "ProductEdge",
      "target": "Product"
    },
    {
      "source": "ImageConnection",
      "target": "ImageEdge"
    },
    {
      "source": "ImageConnection",
      "target": "PageInfo"
    },
    {
      "source": "ImageEdge",
      "target": "Image"
    },
    {
      "source": "ProductPriceRange",
      "target": "MoneyV2"
    },
    {
      "source": "ProductPriceRange",
      "target": "MoneyV2"
    },
    {
      "source": "ProductVariantConnection",
      "target": "ProductVariantEdge"
    },
    {
      "source": "ProductVariantConnection",
      "target": "PageInfo"
    },
    {
      "source": "ProductVariantEdge",
      "target": "ProductVariant"
    },
    {
      "source": "ProductVariantPricePairConnection",
      "target": "ProductVariantPricePairEdge"
    },
    {
      "source": "ProductVariantPricePairConnection",
      "target": "PageInfo"
    },
    {
      "source": "ProductVariantPricePairEdge",
      "target": "ProductVariantPricePair"
    },
    {
      "source": "ProductVariantPricePair",
      "target": "MoneyV2"
    },
    {
      "source": "ProductVariantPricePair",
      "target": "MoneyV2"
    },
    {
      "source": "Fulfillment",
      "target": "FulfillmentLineItemConnection"
    },
    {
      "source": "Fulfillment",
      "target": "FulfillmentTrackingInfo"
    },
    {
      "source": "FulfillmentLineItemConnection",
      "target": "FulfillmentLineItemEdge"
    },
    {
      "source": "FulfillmentLineItemConnection",
      "target": "PageInfo"
    },
    {
      "source": "FulfillmentLineItemEdge",
      "target": "FulfillmentLineItem"
    },
    {
      "source": "FulfillmentLineItem",
      "target": "OrderLineItem"
    },
    {
      "source": "DiscountApplicationConnection",
      "target": "DiscountApplicationEdge"
    },
    {
      "source": "DiscountApplicationConnection",
      "target": "PageInfo"
    },
    {
      "source": "Checkout",
      "target": "AppliedGiftCard"
    },
    {
      "source": "Checkout",
      "target": "AvailableShippingRates"
    },
    {
      "source": "Checkout",
      "target": "Attribute"
    },
    {
      "source": "Checkout",
      "target": "Customer"
    },
    {
      "source": "Checkout",
      "target": "DiscountApplicationConnection"
    },
    {
      "source": "Checkout",
      "target": "CheckoutLineItemConnection"
    },
    {
      "source": "Checkout",
      "target": "MoneyV2"
    },
    {
      "source": "Checkout",
      "target": "Order"
    },
    {
      "source": "Checkout",
      "target": "MoneyV2"
    },
    {
      "source": "Checkout",
      "target": "MailingAddress"
    },
    {
      "source": "Checkout",
      "target": "DiscountAllocation"
    },
    {
      "source": "Checkout",
      "target": "ShippingRate"
    },
    {
      "source": "Checkout",
      "target": "MoneyV2"
    },
    {
      "source": "Checkout",
      "target": "MoneyV2"
    },
    {
      "source": "Checkout",
      "target": "MoneyV2"
    },
    {
      "source": "CheckoutLineItemConnection",
      "target": "CheckoutLineItemEdge"
    },
    {
      "source": "CheckoutLineItemConnection",
      "target": "PageInfo"
    },
    {
      "source": "CheckoutLineItemEdge",
      "target": "CheckoutLineItem"
    },
    {
      "source": "CheckoutLineItem",
      "target": "Attribute"
    },
    {
      "source": "CheckoutLineItem",
      "target": "DiscountAllocation"
    },
    {
      "source": "CheckoutLineItem",
      "target": "ProductVariant"
    },
    {
      "source": "ShippingRate",
      "target": "MoneyV2"
    },
    {
      "source": "AvailableShippingRates",
      "target": "ShippingRate"
    },
    {
      "source": "AppliedGiftCard",
      "target": "MoneyV2"
    },
    {
      "source": "AppliedGiftCard",
      "target": "MoneyV2"
    },
    {
      "source": "Shop",
      "target": "ArticleConnection"
    },
    {
      "source": "Shop",
      "target": "BlogConnection"
    },
    {
      "source": "Shop",
      "target": "Collection"
    },
    {
      "source": "Shop",
      "target": "CollectionConnection"
    },
    {
      "source": "Shop",
      "target": "PaymentSettings"
    },
    {
      "source": "Shop",
      "target": "Domain"
    },
    {
      "source": "Shop",
      "target": "ShopPolicy"
    },
    {
      "source": "Shop",
      "target": "Product"
    },
    {
      "source": "Shop",
      "target": "StringConnection"
    },
    {
      "source": "Shop",
      "target": "StringConnection"
    },
    {
      "source": "Shop",
      "target": "ProductConnection"
    },
    {
      "source": "Shop",
      "target": "ShopPolicy"
    },
    {
      "source": "Shop",
      "target": "ShopPolicy"
    },
    {
      "source": "BlogConnection",
      "target": "BlogEdge"
    },
    {
      "source": "BlogConnection",
      "target": "PageInfo"
    },
    {
      "source": "BlogEdge",
      "target": "Blog"
    },
    {
      "source": "Blog",
      "target": "Article"
    },
    {
      "source": "Blog",
      "target": "ArticleConnection"
    },
    {
      "source": "Blog",
      "target": "ArticleAuthor"
    },
    {
      "source": "Article",
      "target": "ArticleAuthor"
    },
    {
      "source": "Article",
      "target": "ArticleAuthor"
    },
    {
      "source": "Article",
      "target": "Blog"
    },
    {
      "source": "Article",
      "target": "CommentConnection"
    },
    {
      "source": "Article",
      "target": "Image"
    },
    {
      "source": "Article",
      "target": "SEO"
    },
    {
      "source": "CommentConnection",
      "target": "CommentEdge"
    },
    {
      "source": "CommentConnection",
      "target": "PageInfo"
    },
    {
      "source": "CommentEdge",
      "target": "Comment"
    },
    {
      "source": "Comment",
      "target": "CommentAuthor"
    },
    {
      "source": "ArticleConnection",
      "target": "ArticleEdge"
    },
    {
      "source": "ArticleConnection",
      "target": "PageInfo"
    },
    {
      "source": "ArticleEdge",
      "target": "Article"
    },
    {
      "source": "StringConnection",
      "target": "StringEdge"
    },
    {
      "source": "StringConnection",
      "target": "PageInfo"
    },
    {
      "source": "PageConnection",
      "target": "PageEdge"
    },
    {
      "source": "PageConnection",
      "target": "PageInfo"
    },
    {
      "source": "PageEdge",
      "target": "Page"
    },
    {
      "source": "Mutation",
      "target": "CheckoutAttributesUpdatePayload"
    },
    {
      "source": "Mutation",
      "target": "CheckoutAttributesUpdateV2Payload"
    },
    {
      "source": "Mutation",
      "target": "CheckoutCompleteFreePayload"
    },
    {
      "source": "Mutation",
      "target": "CheckoutCompleteWithCreditCardPayload"
    },
    {
      "source": "Mutation",
      "target": "CheckoutCompleteWithCreditCardV2Payload"
    },
    {
      "source": "Mutation",
      "target": "CheckoutCompleteWithTokenizedPaymentPayload"
    },
    {
      "source": "Mutation",
      "target": "CheckoutCompleteWithTokenizedPaymentV2Payload"
    },
    {
      "source": "Mutation",
      "target": "CheckoutCreatePayload"
    },
    {
      "source": "Mutation",
      "target": "CheckoutCustomerAssociatePayload"
    },
    {
      "source": "Mutation",
      "target": "CheckoutCustomerAssociateV2Payload"
    },
    {
      "source": "Mutation",
      "target": "CheckoutCustomerDisassociatePayload"
    },
    {
      "source": "Mutation",
      "target": "CheckoutCustomerDisassociateV2Payload"
    },
    {
      "source": "Mutation",
      "target": "CheckoutDiscountCodeApplyPayload"
    },
    {
      "source": "Mutation",
      "target": "CheckoutDiscountCodeApplyV2Payload"
    },
    {
      "source": "Mutation",
      "target": "CheckoutDiscountCodeRemovePayload"
    },
    {
      "source": "Mutation",
      "target": "CheckoutEmailUpdatePayload"
    },
    {
      "source": "Mutation",
      "target": "CheckoutEmailUpdateV2Payload"
    },
    {
      "source": "Mutation",
      "target": "CheckoutGiftCardApplyPayload"
    },
    {
      "source": "Mutation",
      "target": "CheckoutGiftCardRemovePayload"
    },
    {
      "source": "Mutation",
      "target": "CheckoutGiftCardRemoveV2Payload"
    },
    {
      "source": "Mutation",
      "target": "CheckoutGiftCardsAppendPayload"
    },
    {
      "source": "Mutation",
      "target": "CheckoutLineItemsAddPayload"
    },
    {
      "source": "Mutation",
      "target": "CheckoutLineItemsRemovePayload"
    },
    {
      "source": "Mutation",
      "target": "CheckoutLineItemsReplacePayload"
    },
    {
      "source": "Mutation",
      "target": "CheckoutLineItemsUpdatePayload"
    },
    {
      "source": "Mutation",
      "target": "CheckoutShippingAddressUpdatePayload"
    },
    {
      "source": "Mutation",
      "target": "CheckoutShippingAddressUpdateV2Payload"
    },
    {
      "source": "Mutation",
      "target": "CheckoutShippingLineUpdatePayload"
    },
    {
      "source": "Mutation",
      "target": "CustomerAccessTokenCreatePayload"
    },
    {
      "source": "Mutation",
      "target": "CustomerAccessTokenDeletePayload"
    },
    {
      "source": "Mutation",
      "target": "CustomerAccessTokenRenewPayload"
    },
    {
      "source": "Mutation",
      "target": "CustomerActivatePayload"
    },
    {
      "source": "Mutation",
      "target": "CustomerAddressCreatePayload"
    },
    {
      "source": "Mutation",
      "target": "CustomerAddressDeletePayload"
    },
    {
      "source": "Mutation",
      "target": "CustomerAddressUpdatePayload"
    },
    {
      "source": "Mutation",
      "target": "CustomerCreatePayload"
    },
    {
      "source": "Mutation",
      "target": "CustomerDefaultAddressUpdatePayload"
    },
    {
      "source": "Mutation",
      "target": "CustomerRecoverPayload"
    },
    {
      "source": "Mutation",
      "target": "CustomerResetPayload"
    },
    {
      "source": "Mutation",
      "target": "CustomerResetByUrlPayload"
    },
    {
      "source": "Mutation",
      "target": "CustomerUpdatePayload"
    },
    {
      "source": "CheckoutAttributesUpdatePayload",
      "target": "Checkout"
    },
    {
      "source": "CheckoutAttributesUpdatePayload",
      "target": "CheckoutUserError"
    },
    {
      "source": "CheckoutAttributesUpdatePayload",
      "target": "UserError"
    },
    {
      "source": "CheckoutCompleteWithCreditCardPayload",
      "target": "Checkout"
    },
    {
      "source": "CheckoutCompleteWithCreditCardPayload",
      "target": "CheckoutUserError"
    },
    {
      "source": "CheckoutCompleteWithCreditCardPayload",
      "target": "Payment"
    },
    {
      "source": "CheckoutCompleteWithCreditCardPayload",
      "target": "UserError"
    },
    {
      "source": "Payment",
      "target": "MailingAddress"
    },
    {
      "source": "Payment",
      "target": "Checkout"
    },
    {
      "source": "Payment",
      "target": "CreditCard"
    },
    {
      "source": "Payment",
      "target": "Transaction"
    },
    {
      "source": "CheckoutCompleteWithTokenizedPaymentPayload",
      "target": "Checkout"
    },
    {
      "source": "CheckoutCompleteWithTokenizedPaymentPayload",
      "target": "CheckoutUserError"
    },
    {
      "source": "CheckoutCompleteWithTokenizedPaymentPayload",
      "target": "Payment"
    },
    {
      "source": "CheckoutCompleteWithTokenizedPaymentPayload",
      "target": "UserError"
    },
    {
      "source": "CheckoutCustomerAssociatePayload",
      "target": "Checkout"
    },
    {
      "source": "CheckoutCustomerAssociatePayload",
      "target": "Customer"
    },
    {
      "source": "CheckoutCustomerAssociatePayload",
      "target": "UserError"
    },
    {
      "source": "CheckoutCustomerDisassociatePayload",
      "target": "Checkout"
    },
    {
      "source": "CheckoutCustomerDisassociatePayload",
      "target": "CheckoutUserError"
    },
    {
      "source": "CheckoutCustomerDisassociatePayload",
      "target": "UserError"
    },
    {
      "source": "CheckoutDiscountCodeApplyPayload",
      "target": "Checkout"
    },
    {
      "source": "CheckoutDiscountCodeApplyPayload",
      "target": "CheckoutUserError"
    },
    {
      "source": "CheckoutDiscountCodeApplyPayload",
      "target": "UserError"
    },
    {
      "source": "CheckoutEmailUpdatePayload",
      "target": "Checkout"
    },
    {
      "source": "CheckoutEmailUpdatePayload",
      "target": "CheckoutUserError"
    },
    {
      "source": "CheckoutEmailUpdatePayload",
      "target": "UserError"
    },
    {
      "source": "CheckoutGiftCardApplyPayload",
      "target": "Checkout"
    },
    {
      "source": "CheckoutGiftCardApplyPayload",
      "target": "CheckoutUserError"
    },
    {
      "source": "CheckoutGiftCardApplyPayload",
      "target": "UserError"
    },
    {
      "source": "CheckoutGiftCardRemovePayload",
      "target": "Checkout"
    },
    {
      "source": "CheckoutGiftCardRemovePayload",
      "target": "CheckoutUserError"
    },
    {
      "source": "CheckoutGiftCardRemovePayload",
      "target": "UserError"
    },
    {
      "source": "CheckoutShippingAddressUpdatePayload",
      "target": "Checkout"
    },
    {
      "source": "CheckoutShippingAddressUpdatePayload",
      "target": "CheckoutUserError"
    },
    {
      "source": "CheckoutShippingAddressUpdatePayload",
      "target": "UserError"
    },
    {
      "source": "CheckoutAttributesUpdateV2Payload",
      "target": "Checkout"
    },
    {
      "source": "CheckoutAttributesUpdateV2Payload",
      "target": "CheckoutUserError"
    },
    {
      "source": "CheckoutAttributesUpdateV2Payload",
      "target": "UserError"
    },
    {
      "source": "CheckoutCompleteWithCreditCardV2Payload",
      "target": "Checkout"
    },
    {
      "source": "CheckoutCompleteWithCreditCardV2Payload",
      "target": "CheckoutUserError"
    },
    {
      "source": "CheckoutCompleteWithCreditCardV2Payload",
      "target": "Payment"
    },
    {
      "source": "CheckoutCompleteWithCreditCardV2Payload",
      "target": "UserError"
    },
    {
      "source": "CheckoutCompleteWithTokenizedPaymentV2Payload",
      "target": "Checkout"
    },
    {
      "source": "CheckoutCompleteWithTokenizedPaymentV2Payload",
      "target": "CheckoutUserError"
    },
    {
      "source": "CheckoutCompleteWithTokenizedPaymentV2Payload",
      "target": "Payment"
    },
    {
      "source": "CheckoutCompleteWithTokenizedPaymentV2Payload",
      "target": "UserError"
    },
    {
      "source": "CheckoutCustomerAssociateV2Payload",
      "target": "Checkout"
    },
    {
      "source": "CheckoutCustomerAssociateV2Payload",
      "target": "CheckoutUserError"
    },
    {
      "source": "CheckoutCustomerAssociateV2Payload",
      "target": "Customer"
    },
    {
      "source": "CheckoutCustomerAssociateV2Payload",
      "target": "UserError"
    },
    {
      "source": "CheckoutCustomerDisassociateV2Payload",
      "target": "Checkout"
    },
    {
      "source": "CheckoutCustomerDisassociateV2Payload",
      "target": "CheckoutUserError"
    },
    {
      "source": "CheckoutCustomerDisassociateV2Payload",
      "target": "UserError"
    },
    {
      "source": "CheckoutDiscountCodeApplyV2Payload",
      "target": "Checkout"
    },
    {
      "source": "CheckoutDiscountCodeApplyV2Payload",
      "target": "CheckoutUserError"
    },
    {
      "source": "CheckoutDiscountCodeApplyV2Payload",
      "target": "UserError"
    },
    {
      "source": "CheckoutCompleteFreePayload",
      "target": "Checkout"
    },
    {
      "source": "CheckoutCompleteFreePayload",
      "target": "CheckoutUserError"
    },
    {
      "source": "CheckoutCompleteFreePayload",
      "target": "UserError"
    },
    {
      "source": "CheckoutCreatePayload",
      "target": "Checkout"
    },
    {
      "source": "CheckoutCreatePayload",
      "target": "CheckoutUserError"
    },
    {
      "source": "CheckoutCreatePayload",
      "target": "UserError"
    },
    {
      "source": "CheckoutEmailUpdateV2Payload",
      "target": "Checkout"
    },
    {
      "source": "CheckoutEmailUpdateV2Payload",
      "target": "CheckoutUserError"
    },
    {
      "source": "CheckoutEmailUpdateV2Payload",
      "target": "UserError"
    },
    {
      "source": "CheckoutDiscountCodeRemovePayload",
      "target": "Checkout"
    },
    {
      "source": "CheckoutDiscountCodeRemovePayload",
      "target": "CheckoutUserError"
    },
    {
      "source": "CheckoutDiscountCodeRemovePayload",
      "target": "UserError"
    },
    {
      "source": "CheckoutGiftCardsAppendPayload",
      "target": "Checkout"
    },
    {
      "source": "CheckoutGiftCardsAppendPayload",
      "target": "CheckoutUserError"
    },
    {
      "source": "CheckoutGiftCardsAppendPayload",
      "target": "UserError"
    },
    {
      "source": "CheckoutGiftCardRemoveV2Payload",
      "target": "Checkout"
    },
    {
      "source": "CheckoutGiftCardRemoveV2Payload",
      "target": "CheckoutUserError"
    },
    {
      "source": "CheckoutGiftCardRemoveV2Payload",
      "target": "UserError"
    },
    {
      "source": "CheckoutLineItemsAddPayload",
      "target": "Checkout"
    },
    {
      "source": "CheckoutLineItemsAddPayload",
      "target": "CheckoutUserError"
    },
    {
      "source": "CheckoutLineItemsAddPayload",
      "target": "UserError"
    },
    {
      "source": "CheckoutLineItemsRemovePayload",
      "target": "Checkout"
    },
    {
      "source": "CheckoutLineItemsRemovePayload",
      "target": "CheckoutUserError"
    },
    {
      "source": "CheckoutLineItemsRemovePayload",
      "target": "UserError"
    },
    {
      "source": "CheckoutLineItemsUpdatePayload",
      "target": "Checkout"
    },
    {
      "source": "CheckoutLineItemsUpdatePayload",
      "target": "CheckoutUserError"
    },
    {
      "source": "CheckoutLineItemsUpdatePayload",
      "target": "UserError"
    },
    {
      "source": "CheckoutLineItemsReplacePayload",
      "target": "Checkout"
    },
    {
      "source": "CheckoutLineItemsReplacePayload",
      "target": "CheckoutUserError"
    },
    {
      "source": "CheckoutShippingAddressUpdateV2Payload",
      "target": "Checkout"
    },
    {
      "source": "CheckoutShippingAddressUpdateV2Payload",
      "target": "CheckoutUserError"
    },
    {
      "source": "CheckoutShippingAddressUpdateV2Payload",
      "target": "UserError"
    },
    {
      "source": "CheckoutShippingLineUpdatePayload",
      "target": "Checkout"
    },
    {
      "source": "CheckoutShippingLineUpdatePayload",
      "target": "CheckoutUserError"
    },
    {
      "source": "CheckoutShippingLineUpdatePayload",
      "target": "UserError"
    },
    {
      "source": "CustomerAccessTokenCreatePayload",
      "target": "CustomerAccessToken"
    },
    {
      "source": "CustomerAccessTokenCreatePayload",
      "target": "CustomerUserError"
    },
    {
      "source": "CustomerAccessTokenCreatePayload",
      "target": "UserError"
    },
    {
      "source": "CustomerAccessTokenDeletePayload",
      "target": "UserError"
    },
    {
      "source": "CustomerAccessTokenRenewPayload",
      "target": "CustomerAccessToken"
    },
    {
      "source": "CustomerAccessTokenRenewPayload",
      "target": "UserError"
    },
    {
      "source": "CustomerActivatePayload",
      "target": "Customer"
    },
    {
      "source": "CustomerActivatePayload",
      "target": "CustomerAccessToken"
    },
    {
      "source": "CustomerActivatePayload",
      "target": "CustomerUserError"
    },
    {
      "source": "CustomerActivatePayload",
      "target": "UserError"
    },
    {
      "source": "CustomerAddressCreatePayload",
      "target": "MailingAddress"
    },
    {
      "source": "CustomerAddressCreatePayload",
      "target": "CustomerUserError"
    },
    {
      "source": "CustomerAddressCreatePayload",
      "target": "UserError"
    },
    {
      "source": "CustomerAddressDeletePayload",
      "target": "CustomerUserError"
    },
    {
      "source": "CustomerAddressDeletePayload",
      "target": "UserError"
    },
    {
      "source": "CustomerAddressUpdatePayload",
      "target": "MailingAddress"
    },
    {
      "source": "CustomerAddressUpdatePayload",
      "target": "CustomerUserError"
    },
    {
      "source": "CustomerAddressUpdatePayload",
      "target": "UserError"
    },
    {
      "source": "CustomerCreatePayload",
      "target": "Customer"
    },
    {
      "source": "CustomerCreatePayload",
      "target": "CustomerUserError"
    },
    {
      "source": "CustomerCreatePayload",
      "target": "UserError"
    },
    {
      "source": "CustomerDefaultAddressUpdatePayload",
      "target": "Customer"
    },
    {
      "source": "CustomerDefaultAddressUpdatePayload",
      "target": "CustomerUserError"
    },
    {
      "source": "CustomerDefaultAddressUpdatePayload",
      "target": "UserError"
    },
    {
      "source": "CustomerRecoverPayload",
      "target": "CustomerUserError"
    },
    {
      "source": "CustomerRecoverPayload",
      "target": "UserError"
    },
    {
      "source": "CustomerResetPayload",
      "target": "Customer"
    },
    {
      "source": "CustomerResetPayload",
      "target": "CustomerAccessToken"
    },
    {
      "source": "CustomerResetPayload",
      "target": "CustomerUserError"
    },
    {
      "source": "CustomerResetPayload",
      "target": "UserError"
    },
    {
      "source": "CustomerResetByUrlPayload",
      "target": "Customer"
    },
    {
      "source": "CustomerResetByUrlPayload",
      "target": "CustomerAccessToken"
    },
    {
      "source": "CustomerResetByUrlPayload",
      "target": "CustomerUserError"
    },
    {
      "source": "CustomerResetByUrlPayload",
      "target": "UserError"
    },
    {
      "source": "CustomerUpdatePayload",
      "target": "Customer"
    },
    {
      "source": "CustomerUpdatePayload",
      "target": "CustomerAccessToken"
    },
    {
      "source": "CustomerUpdatePayload",
      "target": "CustomerUserError"
    },
    {
      "source": "CustomerUpdatePayload",
      "target": "UserError"
    }
  ]
}