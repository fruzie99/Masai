

 1. Why is db.json not suitable as a database for real projects?

Using db.json or any filebased storage is not suitable for realworld applications due to several limitations:

 Limitations:
 Performance: Reading and writing the entire file for every operation is slow.
 Scalability: As data grows, file handling becomes inefficient and unmanageable.
 Concurrency: Multiple users accessing the file at the same time can cause data corruption.
 Reliability: No builtin backup, recovery, or crash handling mechanisms.
 Security: No access control or authentication.

Filebased storage is suitable only for learning, prototyping, or very small applications.



 2. Ideal Characteristics of a Database System

A good database system provides much more than storage:

 Key Characteristics:
 Performance: Fast read/write operations with indexing and optimization.
 Concurrency: Supports multiple users accessing data simultaneously.
 Reliability: Ensures data is not lost during failures.
 Data Integrity: Maintains accuracy and consistency using constraints.
 Scalability: Can handle growing amounts of data and users.
 Fault Tolerance: Automatically recovers from crashes or hardware failures.



 3. Types of Databases and Their Use Cases

 1. Relational Databases (SQL)
 Data stored in tables with rows and columns.
 Uses structured schemas and relationships.

Examples: MySQL, PostgreSQL, Oracle  
Use Cases:
 Banking systems
 Ecommerce platforms
 Applications requiring strong consistency



 2. NonRelational Databases (NoSQL)
 Flexible schema or schemaless.
 Handles unstructured or semistructured data.

Examples: MongoDB, Firebase, Cassandra  
Use Cases:
 Realtime applications
 Big data systems
 Social media platforms
