
What is Schema Design and What Does a Database Schema Represent?

Schema design is the process of planning and defining how data will be structured, stored, and related inside a relational database.

A database schema represents the logical blueprint of the database. It defines:

* Tables
* Columns
* Data types
* Constraints (keys, validations)
* Relationships between tables

For example, in an e-commerce database, the schema defines tables like `users`, `orders`, and `products`, along with how they are connected.

Why Schema Design Is Required Before Writing Backend Code

Schema design must be done before backend development because:

* Backend APIs depend on table structure and relationships
* Queries (SELECT, INSERT, UPDATE, DELETE) rely on column names and data types
* Poor schema decisions later require major code rewrites

For example, if you later realize that one user can have multiple orders, but you designed only one order column in the `users` table, you will need to redesign both the database and backend logic.



Impact of Poor Schema Design

Poor schema design negatively affects:

 1. Data Consistency

* Duplicate data can become inconsistent
* Example: storing user email in multiple tables can result in mismatches

 2. Maintenance

* Updating data in many places becomes difficult
* Small changes require modifying multiple tables and queries

 3. Scalability

* As data grows, poorly structured tables lead to slow queries
* Adding new features becomes complex and error-prone


 Validations in Schema Design and Why Databases Enforce Them

Validations are rules applied to columns to ensure correct and meaningful data.

Common database validations include:

* NOT NULL → prevents empty values
  Example: `email TEXT NOT NULL`

* UNIQUE → prevents duplicate values
  Example: unique email for each user

* PRIMARY KEY → uniquely identifies each row
  Example: `id SERIAL PRIMARY KEY`

* DEFAULT → assigns a value if none is provided
  Example: `created_at DEFAULT NOW()`

Databases enforce validations to:

* Protect data integrity
* Prevent invalid or duplicate data
* Reduce errors from backend or user input

---

Difference Between a Database Schema and a Database Table

* Database Schema                                         
Overall structure of the database                   
Defines tables, constraints, relationships  
Logical design                                       


* Database Table
Stores actual data
Contains rows and columns
Physical storage  

Example:

* Schema: design that includes `users` and `orders` tables
* Table: `users` table storing individual user records


Why a Table Should Represent Only One Entity

Each table should represent one real-world entity to follow normalization principles.

Example:

* `users` table → user information
* `orders` table → order information

If a single table stores both user and order data:

* Data duplication increases
* Multiple NULL values appear
* One-to-many relationships become hard to manage



Why Redundant or Derived Data Should Be Avoided

Redundant data is repeated data.
Derived data is data that can be calculated from existing data.

Example:

* Storing `total_order_amount` when it can be calculated from order items

Problems caused:

* Inconsistency when data updates
* Extra storage usage
* More complex updates



Importance of Choosing Correct Data Types

Choosing the correct data type ensures:

* Efficient storage
* Faster queries
* Accurate data validation

Examples:

* `INTEGER` for age instead of `TEXT`
* `TIMESTAMP` for dates instead of strings
* `BOOLEAN` for true/false values





