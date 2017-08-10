# Objects

Class-based selectors defining 'non cosmetic' design patterns - wrappers, layouts, content blocks, etc.

### Pugin Grid Settings

Base page dimensions, grid settings and breakpoints are declared in the `objects/grid-settings.scss` file

### Pugin Grid Based Layouts

Basic layouts can be declared and updated in the `objects/grid-layouts.scss` file

**Layout Naming Conventions**

1. Containers/wrapper classes use the **c** prefix for 'container'. Container variations are declared by appending **-** and a **2** character identifier to **c**. For example **.c-fs** represents 'container full screen' and stretches an empty container div across the full viewport.

2. Row classes use the **row** identifier for a 'row'. If required, row variations can be declared by appending **__** and a string identifier to **row** (e.g. **row__indent** ).

3. All components and elements (apart from headings) should be wrapped in an initial **block** div container which sets the display property and applies consistent vertical padding. The contents of the block container can then be manipulated as desired, independently of all other components, elements and main layout.
