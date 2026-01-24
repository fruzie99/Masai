Database Relationships

A database relationship defines how two or more tables are connected to each other using primary keys and foreign keys. Relationships help maintain data integrity, reduce data redundancy, and allow efficient querying of related data.

Types of Database Relationships

One-to-One Relationship (1:1)
Each record in one table is associated with only one record in another table.

E-commerce Example

Users and  User Profiles

Each user has one profile

Each profile belongs to one user




One-to-Many Relationship (1:N)

One record in a table can be related to multiple records in another table.

 E-commerce Example

Customers and Orders

One customer can place many orders

Each order belongs to one customer


Many-to-Many Relationship (M:N)

Multiple records in one table are related to multiple records in another table.
Implemented using a junction table.

E-commerce Example

Orders and Products

One order can contain many products

One product can appear in many orders

