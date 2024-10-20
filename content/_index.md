---
displayinlist: false
outputs:
  - iiif-collection
  - html
  - rss
cascade:
  - _target:
      kind: 'page'
      path: '/privacy'
    params:
      sitemap:
        disable: true
  - _target:
      kind: '*'
      lang: '*'
      path: '**'
    params:
      sitemap:
        priority: 1.0

---
