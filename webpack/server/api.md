`POST /api/client/accounts`
params:
  client_id<Integer>: # ID клиента

response example:
```
  {
    "accounts": [
      {
        "balance": 68896.67,
        "created": 1500496135,
        "annual": 4.16,
        "number": 57899618,
        "currency": "€",
        "last_operation": {
          "amount": 6554,
          "carried_out": 1500502905,
          "last_cart_number": 9946,
          "positive": true,
          "type": "percent"
        }
      },
    ]
  }
```


`POST /api/client/account`
params:
  client_id<Integer>: # ID клиента
  product_id<Integer>: # Номер продукта (счёт, вклад)  

response example:
```
{
  "account": [
    {
      "amount": 6481.33,
      "carried_out": 1502672968,
      "last_cart_number": 7369,
      "positive": true,
      "type": "percent"
    },
    {
      "amount": 877.63,
      "carried_out": 1500698921,
      "last_cart_number": 3694,
      "positive": true,
      "type": "top_up"
    }
  ]
}
```
