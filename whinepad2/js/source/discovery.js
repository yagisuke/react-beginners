'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';
import Button from './components/Button';
import Suggest from './components/Suggest';
import Rating from './components/Rating';
import FormInput from './components/FormInput';
import Form from './components/Form';
import Actions from './components/Actions';
import Dialog from './components/Dialog';

ReactDOM.render(
  <div style={{pading: '20px'}}>
    <h1>コンポーネント一覧</h1>

    <h2>Logo</h2>
    <div><b><Logo />React 勉強中。</b></div>

    <h2>Button</h2>
    <div>onClickが指定されたButton: <Button onClick={() => alert('クリックされました')}>クリック</Button></div>
    <div>hrefが指定されたButton: <Button href="https://github.com/yagisuke">フォローする</Button></div>
    <div>クラス名が指定されたButton: <Button className="custom">何もしません</Button></div>

    <h2>Suggest</h2>
    <div><Suggest options={['react', 'angular', 'vue', 'backbone', 'knockout', 'jQuery']} /></div>

    <h2>Rating</h2>
    <div>初期値なし: <Rating /></div>
    <div>初期値(4): <Rating defaultValue={4} /></div>
    <div>最大値(11): <Rating max={11} /></div>
    <div>読み取り専用: <Rating readonly={true} defaultValue={3} /></div>

    <h2>FormInput</h2>
    <table>
      <tbody>
        <tr>
          <td>単純なフィールド</td>
          <td><FormInput defaultValue="デフォルトです" /></td>
        </tr>
        <tr>
          <td>年の入力</td>
          <td><FormInput type="year" /></td>
        </tr>
        <tr>
          <td>評価</td>
          <td><FormInput type="rating" defaultValue={4} /></td>
        </tr>
        <tr>
          <td>入力候補の提示</td>
          <td><FormInput
            type="suggest"
            options={['red', 'green', 'blue']}
            defaultValue="red" />
          </td>
        </tr>
        <tr>
          <td>単純なフィールド</td>
          <td><FormInput type="text" /></td>
        </tr>
      </tbody>
    </table>

    <h2>Form</h2>
    <Form
      fields={[
        {label: '評価', type: 'rating', id: 'rateme'},
        {label: '挨拶', id: 'freetext'},
      ]}
      initialData={{rateme: 4, freetext: 'こんにちわ'}}
      readonly={true} />

    <h2>Actions</h2>
    <div><Actions onAction={type => alert(type)} /></div>

    <h2>Dialog</h2>
    <Dialog
      header="単純な例"
      onAction={type => alert(type)}>
      こんにちわ。
    </Dialog>
    <Dialog
      header="キャンセルボタンなしのカスタムのボタン"
      hasCancel={false}
      confirmLabel="ラベル"
      onAction={type => alert(type)}>
      なんでも表示できます。例えば、
      <Button>ボタン</Button>
    </Dialog>
  </div>,
  document.getElementById('discovery')
);
