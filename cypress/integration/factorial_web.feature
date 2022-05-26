Feature: Web Calculate factorial
   Calculate factorial from webpage

Background:
      Given I visit factorial web

Scenario Outline: Calculate web factorial valid numbers
      When I calculate factorial for the number '<number>'
      Then I should see factorial result '<result>'
      Examples:
        |   number        |   result                 |
        |   0             |   1                      |
        |   200 | 788657867364790503552363213932185062295135977687173263294742533244359449963403342920304284011984623904177212138919638830257642790242637105061926624952829931113462857270763317237396988943922445621451664240254033291864131227428294853277524242407573903240321257405579568660226031904170324062351700858796178922222789623703897374720000000000000000000000000000000000000000000000000               |


Scenario Outline: Calculate web factorial invalid numbers
      When I calculate factorial for the number '<number>'
      Then I should see factorial error message
      Examples:
      |   number        |
      |   -3            |
      |    a            |
      |    1.5          |

Scenario: Calculate web factorial empty number
    When I press calculate factorial button
    hen I should see factorial error message
