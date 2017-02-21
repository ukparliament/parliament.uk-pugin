# Components

Specific but generic UI components that can be used across multiple Parliament micro-services. Bespoke component styles that build upon these base components and that are specific to a single micro-service should reside in the micro-services own repository.

## Naming Conventions

1. Header - at present only 1 header is used and the base class is set as **.header**. Additional style classes are then appended to this base.
2. Footer - at present only 1 footer is used and the base class is set as **.footer**. Additional style classes are then appended to this base.

**Clear Fix**

Clear Fix can be applied to any class by adding `@include clearfix`
