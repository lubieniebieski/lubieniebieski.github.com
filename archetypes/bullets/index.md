---
{{- $no := substr .Name -3 -}}
{{- $no =  strings.TrimLeft "0" $no | int }}
{{- $prev := add $no -1 }}
{{- $prevUrl := printf "/bullets/%d" $prev -}}
{{- firstDate := time.Date(2022, 4, 13, 1, 0, 0, 0, time.UTC) }}
   {{- secondDate := time.Date(2021, 2, 12, 5, 0, 0, 0, time.UTC) }}
    {{- difference := firstDate.Sub(secondDate)}}

title: "Bullets #{{ $no }} | TITLE"
author: "adam nowak"
date: "{{ .Date }}"
slug: "{{ $no }}"
description:
categories:
  - bullets
  - summary
tags: []
date: {{ .Date }}
---

Welcome to Bullets #{{ $no }}! You can read the previous one [here][1].

[1]: {{< ref "{{ $prevUrl }}" >}}
