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
      {
        "balance": 219683.18,
        "created": 1500712583,
        "annual": 6.16,
        "number": 57899480,
        "currency": "$",
        "last_operation": {
          "amount": 12896,
          "carried_out": 1500771790,
          "last_cart_number": 5799,
          "positive": false,
          "type": "charge_off"
        }
      }
    ]
  }
```
