<!-- @format -->

# PantryPro

## Setting up the database

### Commands

| Syntax                          | Description                                                                                      |
| ------------------------------- | ------------------------------------------------------------------------------------------------ |
| -p --project \<PROJECT>         | Relative path to the project folder of the target project. Default value is the current folder.  |
| -s --startup-project \<PROJECT> | Relative path to the project folder of the startup project. Default value is the current folder. |

Install EntityFramework for DotNet

```bash
dotnet tool install --global dotnet-ef --version 8.0.3
```

Initiate the migation

```bash
dotnet ef migrations add InitialCreate -p PantryPro.Server -s PantryPro.Server --output-dir Migrations --context PantryProAppContext
```

Apply migration

```bash
dotnet ef database update -p PantryPro.Server -s PantryPro.Server
```

If you need to remove the migration

1st delete the migration file in the Migrations folder

2nd drop tables

```bash
DROP TABLE "__EFMigrationsHistory"
DROP TABLE "GroceryItem"
DROP TABLE "GroceryItemType"
```

PostGresql
Adding Quantity to GroceryItem
ALTER TABLE "GroceryItem"
ADD COLUMN "Quantity" int

Adding Random ints to Quantity
UPDATE "GroceryItem"
SET "Quantity" = floor(Random() \* 10) + 1
WHERE MOD("Id",27)=0
