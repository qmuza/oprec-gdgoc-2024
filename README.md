## Getting Started

This web app is available at [papyruspub.vercel.app](https://papyruspub.vercel.app)

This project is mainly directed to accomplish a REST API implementation as required in the GDGOC UGM hacker study case, Back-End role, but I have also included some Front-End stuffs to assist people who may not have tools like vercel test the API directly on the web.
 
## Endpoints

- ### ```api/books```

1. method: ```GET```  
  
   description: Read all items
  
   Request body: none

   Response status:
   - ```200``` on success
  
   Response body:
   ```
   {
     "data": [
       {
         "id": X
         "title": "yourtitle",
         "author": "yourauthor",
         "published_at": "yourpublicationdate",
         "created_at": "yourcreationdate",
         "updated_at": "yourmodificationdate"
       }
     ]
   }
    ```  
  
2. method: ```POST```

   description: Create a new item
   
   Request body:
   ```
   {
     "title": "yourtitle",
     "author": "yourauthor",
     "published_at": "yourpublicationdate"
   }
   ```
   
   Response status:
   - ```200``` on success
   - ```400``` if parameters missing or JSON invalid
  
   Response body:
   ```
   {
     "message": "Book created successfully",
     "data": {
       "id": X
       "title": "yourtitle",
       "author": "yourauthor",
       "published_at": "yourpublicationdate",
       "created_at": "yourcreationdate",
       "updated_at": "yourmodificationdate"
     }
   }
    ```

   
-   ###  ```api/books/[book_id]```

1. method: ```GET```

   description: Read item by book ID
   
   Request body: none
   
   Response status:
   - ```200``` on success
   - ```404``` if book ID not found
  
   Response body:
   ```
   {
     "data": {
       "id": X
       "title": "yourtitle",
       "author": "yourauthor",
       "published_at": "yourpublicationdate",
       "created_at": "yourcreationdate",
       "updated_at": "yourmodificationdate"
     }
   }
    ```  
  
2. method: ```PUT```  
  
   description: Update item by book ID  
  
   Request body:
   ```
   {
     "field": "updatedvalue"
   }
   ```
   note: may contain any number of fields from \[title, author, published_at\]  
  
   Response status:
   - ```200``` on success
   - ```404``` if book ID not found
   - ```400``` if JSON invalid
   Response body:
   ```
   {
     "message": "Book updated successfully",
     "data": {
       "id": X
       "title": "yourtitle",
       "author": "yourauthor",
       "published_at": "yourpublicationdate",
       "created_at": "yourcreationdate",
       "updated_at": "yourmodificationdate"
     }
   }
    ```

3. method: ```DELETE```  
  
   description: Delete item by book ID
  
   Request body: none
  
   Response status:
   - ```200``` on success
   - ```404``` if book ID not found
  
   Response body:
   ```
   {
     "message": "Book deleted successfully",
   }
    ```  
