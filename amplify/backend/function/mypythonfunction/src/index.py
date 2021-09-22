import json

def handler(event, context):
  body = {
      "message": "Hello from Lamda!"
  }
  response = {
    'statusCode': 200,
    'headers': {
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps(body)
  }
  print('received event:')
  print(event)
  
  return response