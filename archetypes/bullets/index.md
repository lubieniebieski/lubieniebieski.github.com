{{- $no := substr .Name -3 -}}
{{- $no =  strings.TrimLeft "0" $no | int }}
{{- $prev := add $no -1 }}
{{- $prevUrl := printf "/bullets/0%d" $prev -}}
---
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

Welcome to Bullets #{{ $no }}! Sit back, relax, and dive into the latest edition of the [series][2], you can also catch up on the previous edition [bullets/{{ $prev }}][1].

---
[1]: {{< relref "{{ $prevUrl }}" >}}
[2]: {{< relref "/categories/bullets" >}}
