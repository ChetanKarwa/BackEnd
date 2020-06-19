
#RESTful Routing (New mini-project)
##Introduction
*Define REST and explain WHY it matters
*List all  7 RESTful routes
*Show example of RESTful routing in practice
REST – a mapping between HTTP routes and CRUD

#Blog Index
*Setup the Blog App
*Create the Blog model
*Add INDEX route and template
* Add Simple Nav Bar

#Basic Layout
*Add Header and Footer Partials
*Include Semantic UI
*Add simple Nav

#Putting the C in CRUD
*Add New route
*Add New template
*Add CREATE route
*Add CREATE template

#SHOWtime
*Add SHOW route and template
*Add Links to show page
* Style show template

#Edit/Update
*Add EDIT Route
*Add Edit form
*Add update route
* Add update form
<!-- it is used bcz html doesnt support put and delete request -->
<!-- we have to install method override and then tell him about _method -->
* Add method override

#DESTROYYYY
*ADD DESTROY ROUTE
*ADD EDIT AND DESTROY LINK

## FINAL UPDATES
<!-- sanitizer help to make the body pure html so that if anyone writes script tag
it will not get into consideration which will get consider if we only use minus sign which make that thing a code -->
* Sanitize blog body
* Style Index
* Update Rest Table

NAME       PATH         HTTP VERB                     PURPOSE                    MONGOOSE METHOD
==========================================================================================================
Index      /dogs           GET       List all dogs                                 Dog.find()
New        /dogs/new       GET       Show new dog form                             N/A
Create     /dogs           POST      create new dog, then redirect somewhere       Dog.create()
Show       /dogs/:id       GET       show info about one dog                       Dog.findById()
Edit       /dogs/:id/edit  GET       show edit form for one dog                    DOG.findBYId()
Update     /dogs/:id       PUT       update a particular dog,                      DOG.findByIdAndUpdate()
                                     then redirect somewhere...                               
Destroy    /dogs/:id       DELETE    delete a particular dog,                      Dog.findByIdAndRemove()
                                     then redirect somewhere...