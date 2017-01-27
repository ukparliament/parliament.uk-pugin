# Objects

Class-based selectors defining 'non cosmetic' design patterns - wrappers, layouts, content blocks, etc.

## Grid System

The float based grid system used in Pugin is Bourbon Neat 1.8.0 - http://neat.bourbon.io/. Detailed information can be found by reading the 'BOURBON-NEAT-GRID.md' readme file in this same directory.

### Pugin Grid Settings

Base page dimensions, grid settings and breakpoints are declared in the `objects/grid-settings.scss` file

### Pugin Grid Based Layouts

Basic layouts can be declared and updated in the `objects/grid-layouts.scss` file

**Layout Naming Conventions**

1. Containers/wrapper classes use the **c** prefix for 'container'. Container variations are declared by appending **-** and a **2** character identifier to **c**. For example **.c-fs** represents 'container full screen' and stretches an empty container div across the full viewport.

2. Row classes use the **row** identifier for a 'row'. If required, row variations can be declared by appending **-** and a **2** character identifier to **r** (e.g. **row-ab** ).

3. Column combination classes use the **l** prefix for 'layout'. Column layout variations are declared by appending **-** and a character **or** numeric identifier to **l** depending on what you need. For example **.l-4** represents a layout block with 4 columns in it.
