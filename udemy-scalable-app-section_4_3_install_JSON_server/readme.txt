Different queries use case:

- Get:
    - http://localhost:3005/products
    - http://localhost:3005/products/1

- Filtering using query:
    - http://localhost:3005/products?id=1
    - http://localhost:3005/reviews?rating=4
    * nested filtering:
    - http://localhost:3005/products?category=electronics&discount.type=shipping

- Sort
    - http://localhost:3005/products?_sort=price&_order=desc
    - http://localhost:3005/products?_sort=price,category&_order=desc,asc

- Pagination
    - http://localhost:3005/products?_page=2&_limit=5

- Operators (range)
        - http://localhost:3005/products?price_gte=2000&price_lte=6000

- Operators (range)
                - http://localhost:3005/products?price_gte=2000&price_lte=6000
                - http://localhost:3005/products?id_ne=1
                - http://localhost:3005/products?category_like=^f

- Search full text
                - http://localhost:3005/products?q=in

- Relationship
                - http://localhost:3005/products?_embed=reviews
                - http://localhost:3005/products/1?_embed=reviews
                - http://localhost:3005/reviews?_expand=product
                - http://localhost:3005/reviews/1?_expand=product

- Post
                - http://localhost:3005/products
                with the below body for e.g:
                    {
                      "id": 11,
                      "title": "Product 11",
                      "category": "electronics",
                      "price": 3200,
                      "description": "This is description about product 11",
                      "discount": {
                        "type": "shipping"
                      }
                    }

- Put/Patch/Delete
                - http://localhost:3005/products/1
                with the below body for e.g:
                    {
                      "id": 1,
                      "title": "Product 1 updated",
                      "category": "electronics",
                      "price": 3200,
                      "description": "This is description about product 1",
                    }
                 * for Delete no need to include body




