## DB
openapi_specs
 - id
 - name varchar(200)
 - description text
 - spec text
 - version varchar(20)
 - source_repository varchar(250)
 - avatar_url varchar(250)
 - test_base_url varchar(250)

 - created_on datetime
 - created_by varchar(200)

openapi_spec_tags 
 - openapi_spec_id
 - tag varchar(100)

 ## Routes
 GET /openapi_specs - return a list of open api
 {
     id, 
     name, 
     description,
     version, 
     source_repository
 }

 GET /openapi_specs/{id} - return a single api
 {
     id, 
     name, 
     description,
     version, 
     source_repository,
     spec
 }

 POST /openapi_specs - upload a open api

 PUT /openapi_specs - update meta data of open API