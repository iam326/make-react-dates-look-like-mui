# make-react-dates-look-like-mui

react-dates を Material-UI の DatePicker っぽくカスタマイズしてみました。

Material-UI の DatePicker は日付の範囲を指定する機能を持っていません(2020/09/16時点での最新ver - v3.2.10 では)。そのため、日付範囲の指定が機能として必要な場合は、他の DatePicker ライブラリを使用する必要があります。ただ、他のライブラリを使用することによって、デザインの統一性が崩れてしまうという悩みが発生します。

今回は、react-dates という DatePicker ライブラリをカスタマイズすることで、この辺の悩みを解決できないかチャレンジしてみました。結果そこそこ良い感じになった気がします。

ちなみに、Material-UI の DatePicker は v4 が開発途中であり、日付範囲を指定できる DatePicker が追加される予定みたいです。公式ドキュメントの方で [Demo](https://v4-0-0-alpha-12.material-ui-pickers.dev/demo/daterangepicker#basic-usage) が公開されていて触ることができます。早くリリースされて欲しいなあ。

## Environment

```
$ sw_vers
ProductName:	Mac OS X
ProductVersion:	10.15.6
BuildVersion:	19G2021

$ node --version
v12.18.2

$ npm --version
6.14.5

$ yarn --version
1.22.4

$ npm list --global --depth=0
...
├── create-react-app@3.4.1
...

$ yarn list --depth=0
...
├─ @material-ui/core@4.11.0
├─ @material-ui/pickers@3.2.10
├─ react-dates@21.8.0
├─ react-dom@16.13.1
├─ react@16.13.1
├─ typescript@3.7.5
...
```

## Usage

```
$ yarn install
$ yarn start
```
