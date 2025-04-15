-- Create the database
CREATE DATABASE IF NOT EXISTS RestaurantDB;
USE RestaurantDB;

-- Drop existing tables if any
DROP TABLE IF EXISTS Orders, OrderItems, Customers, Employees, MenuItems, Tables, Reservations, Payments;

-- Table: Customers
CREATE TABLE Customers (
    CustomerID INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Email VARCHAR(100),
    Phone VARCHAR(20),
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: Employees
CREATE TABLE Employees (
    EmployeeID INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Role VARCHAR(50),
    Email VARCHAR(100),
    Phone VARCHAR(20),
    HireDate DATE
);

-- Table: Tables (Restaurant Seating)
CREATE TABLE Tables (
    TableID INT AUTO_INCREMENT PRIMARY KEY,
    Capacity INT,
    Location VARCHAR(50),
    IsAvailable BOOLEAN DEFAULT TRUE
);

-- Table: MenuItems
CREATE TABLE MenuItems (
    ItemID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100),
    Description TEXT,
    Price DECIMAL(10,2),
    Category VARCHAR(50),
    IsAvailable BOOLEAN DEFAULT TRUE
);

-- Table: Orders
CREATE TABLE Orders (
    OrderID INT AUTO_INCREMENT PRIMARY KEY,
    CustomerID INT,
    EmployeeID INT,
    TableID INT,
    OrderTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Status VARCHAR(20),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
    FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID),
    FOREIGN KEY (TableID) REFERENCES Tables(TableID)
);

-- Table: OrderItems
CREATE TABLE OrderItems (
    OrderItemID INT AUTO_INCREMENT PRIMARY KEY,
    OrderID INT,
    ItemID INT,
    Quantity INT,
    Notes TEXT,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (ItemID) REFERENCES MenuItems(ItemID)
);

-- Table: Reservations
CREATE TABLE Reservations (
    ReservationID INT AUTO_INCREMENT PRIMARY KEY,
    CustomerID INT,
    TableID INT,
    ReservationTime DATETIME,
    NumGuests INT,
    Status VARCHAR(20),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
    FOREIGN KEY (TableID) REFERENCES Tables(TableID)
);

-- Table: Payments
CREATE TABLE Payments (
    PaymentID INT AUTO_INCREMENT PRIMARY KEY,
    OrderID INT,
    Amount DECIMAL(10,2),
    PaymentMethod VARCHAR(50),
    PaymentTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID)
);

-- Insert sample customers
INSERT INTO Customers (FirstName, LastName, Email, Phone)
VALUES 
('Alice', 'Johnson', 'alice@example.com', '123-456-7890'),
('Bob', 'Smith', 'bob@example.com', '555-123-4567');

-- Insert sample employees
INSERT INTO Employees (FirstName, LastName, Role, Email, Phone, HireDate)
VALUES 
('Emma', 'Watson', 'Manager', 'emma@restaurant.com', '444-555-6666', '2021-06-15'),
('John', 'Doe', 'Waiter', 'john@restaurant.com', '111-222-3333', '2022-01-10');

-- Insert sample tables
INSERT INTO Tables (Capacity, Location)
VALUES 
(2, 'Patio'),
(4, 'Main Hall'),
(6, 'VIP Room');

-- Insert sample menu items
INSERT INTO MenuItems (Name, Description, Price, Category)
VALUES 
('Margherita Pizza', 'Classic pizza with tomatoes, mozzarella, and basil.', 12.99, 'Pizza'),
('Caesar Salad', 'Crisp romaine with Caesar dressing and croutons.', 8.50, 'Salad'),
('Spaghetti Bolognese', 'Pasta with rich meat sauce.', 14.00, 'Pasta');

-- Insert sample reservations
INSERT INTO Reservations (CustomerID, TableID, ReservationTime, NumGuests, Status)
VALUES 
(1, 1, '2025-04-15 19:00:00', 2, 'Confirmed'),
(2, 2, '2025-04-15 20:30:00', 4, 'Pending');

-- Insert a sample order
INSERT INTO Orders (CustomerID, EmployeeID, TableID, Status)
VALUES 
(1, 2, 1, 'In Progress');

-- Insert order items for the order
INSERT INTO OrderItems (OrderID, ItemID, Quantity, Notes)
VALUES 
(1, 1, 1, 'Extra cheese'),
(1, 2, 2, 'No anchovies');

-- Insert a sample payment
INSERT INTO Payments (OrderID, Amount, PaymentMethod)
VALUES 
(1, 29.99, 'Credit Card');
