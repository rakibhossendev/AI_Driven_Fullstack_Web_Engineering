# Module 3 (CSS)

## Topic
- CSS Basic
- CSS Selector
- CSS Styling
- CSS Display
- HTML form Recap
- HTML Table
- Flex Layout 
- Hero Banner
- Card Selections
- Overview

## Basic Syantax
```css
property: value;
```
## Inline CSS
```html
<p style="color: red">This is a simple pragraph</p>
```
## Adantage of line css
- Load Fast
- Highest Priority
- Instant Fixes
- No File Switching

## Disadvantage 
- It cannot be reuse
- Repetitive Code
- Hard to Update
- Increased HTML Weight

## Internal CSS
Internal css write before head tag.
```html
<head>
    <style>
        tag_name{
            <!--Style-->
        }
    </style>
</head>
```
## Difference of class and id
### Class
- Same class use of multiple element
- Reusal


### ID
- Same Id is only can use one element

## CSS Selector
- Tag selector
- Class Selector
- ID selector
- Universal Selector

## CSS Measuring Units
### Absolute units
This is fixed
- px
- cm
- mm
- in
- pt
- pc 
### Relative units
This depend on somthing else.
- %
- em(compare parent element root)
- rem(Root em)
- vw
- vh
- vmin
- ch

### Calculate
We know, Modern web browser default font size is 16px
- 1 rem = 1 * 16 = 16 px
- 2 rem = 2 * 16 = 32 px
- .....
- .....

## Inline and inline-block display difference
### Inline
- It is not start new line
- Here can't set width or height


