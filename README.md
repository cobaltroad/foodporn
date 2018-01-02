# Foodporn

This application is intended to showcase a Rails/PostgreSQL backend and a React frontend.
It was initially created using `rails` command line generators and migrators.

    rails new foodporn --api --database=postgresql --webpack=react
    rails db:create

Then the Semantic UI CSS was installed for styling

    yarn add semantic-ui-react semantic-ui-css

Various Rails models were then added.  The central resource being offered by this application
is a `Dish` which has a polymorphic association to various `sources`.

There are two main `source` models.  A `FoodVendor` describes somewhere where the dish in question
is made, bought and sold to a consumer.  A `FoodResource` describes how the dish is made, with the
intent that the consumer is also the one making it.  Single table inheritance further specifies
a vendor into a `Restaurant` `Popup` or `FoodTruck` whereas a resource can be a `BlogPost` or a `Cookbook`.

There is also a `PrePackaged` source type which could describe dehydrated, frozen, or other
ready-to-prepare meals.
