---
{{- $no := substr .Name -3 -}}
{{- $no =  strings.TrimLeft "0" $no | int }}
{{- $prev := add $no -1 }}
{{- $prevUrl := printf "/bullets/%d" $prev -}}

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

Welcome to Bullets #{{ $no }}! You can read the previous one here: [bullets/{{ $prev }}][1].

[1]: {{< ref "{{ $prevUrl }}" >}}
