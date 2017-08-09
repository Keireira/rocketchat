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
          "carriedOut": 1500502905,
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
  get_account<Boolean>: # Передавать ли вместе с историей информацию о счёте

response example:
```
{
  "account": {
    "annual": 0.58,
    "balance": 146769.15,
    "created": 1501433382,
    "number": 57896019,
    "currency": "₽"
  },
  "history": [
    {
      "amount": 17157.33,
      "carriedOut": 1500910557,
      "lastCartNumber": "3900",
      "positive": false,
      "type": "charge_off"
    },
    {
      "amount": 19278.18,
      "carriedOut": 1504761633,
      "lastCartNumber": "1732",
      "positive": true,
      "type": "top_up"
    },
    {
      "amount": 16386.68,
      "carriedOut": 1503680581,
      "lastCartNumber": "8716",
      "positive": true,
      "type": "top_up"
    }
  ]
}
```

`POST /api/client/deposits`
```
{
  "deposits": [
    {
      "balance": 3123.32,
      "percent": 8.88,
      "interestMonth": 277.35,
      "period": 24,
      "passed": 6,
      "number": 6910764,
      "currency": "€"
    }
  ]
}
```


<!-- Sockets -->
Объект `USER`:
  userId: <Integer>
  isClient: <Boolean>
  avatarUrl: <String>
  displayName: <String>
