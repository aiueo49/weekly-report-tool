import React, { useState } from 'react';
import ReactSelect from 'react-select';
import CreatableSelect from 'react-select/creatable';
import './App.css';
import TermsModal from './TermsModal';
import PrivacyModal from './PrivacyModal';

function App() {
  const [lastWeek, setLastWeek] = useState({
    learning: [],
    totalHours: '',
    credo: '',
  });

  const [thisWeek, setThisWeek] = useState({
    learning: '',
    totalHours: '',
    credo: '',
  });

  // 学習内容の選択肢
  const options = [
    {
      label: "プログラミング入門",
      options: [
        { value: "プログラミング入門1", label: "プログラミング入門1" },
        { value: "プログラミング入門2", label: "プログラミング入門2" },
        { value: "プログラミング入門3", label: "プログラミング入門3" },
        { value: "プログラミング入門4", label: "プログラミング入門4" },
        { value: "プログラミング入門5", label: "プログラミング入門5" },
        { value: "プログラミング入門6", label: "プログラミング入門6" },
        { value: "プログラミング入門7", label: "プログラミング入門7" },
        { value: "プログラミング入門8", label: "プログラミング入門8" },
      ],
    },
    {
      label: "アプリ開発",
      options: [
        { value: "アプリ開発1", label: "アプリ開発1" },
      ],
    },
    {
      label: "開発知識入門",
      options: [
        { value: "開発知識入門1", label: "開発知識入門1" },
        { value: "開発知識入門2", label: "開発知識入門2" },
        { value: "開発知識入門3", label: "開発知識入門3" },
        { value: "開発知識入門4", label: "開発知識入門4" },
        { value: "開発知識入門5", label: "開発知識入門5" },
        { value: "開発知識入門6", label: "開発知識入門6" },
        { value: "開発知識入門7", label: "開発知識入門7" },
        { value: "開発知識入門8", label: "開発知識入門8" },
      ],
    },
    {
      label: "Ruby入門",
      options: [
        { value: "Ruby入門1", label: "Ruby入門1" },
        { value: "Ruby入門2", label: "Ruby入門2" },
        { value: "Ruby入門3", label: "Ruby入門3" },
        { value: "Ruby入門4", label: "Ruby入門4" },
        { value: "Ruby入門5", label: "Ruby入門5" },
        { value: "Ruby入門6", label: "Ruby入門6" },
        { value: "Ruby入門7", label: "Ruby入門7" },
        { value: "Ruby入門8", label: "Ruby入門8" },
        { value: "Ruby入門9", label: "Ruby入門9" },
        { value: "Ruby入門10", label: "Ruby入門10" },
        { value: "Ruby入門11", label: "Ruby入門11" },
      ],
    },
    {
      label: "Web技術入門",
      options: [
        { value: "Web技術入門1", label: "Web技術入門1" },
        { value: "Web技術入門2", label: "Web技術入門2" },
        { value: "Web技術入門3", label: "Web技術入門3" },
        { value: "Web技術入門4", label: "Web技術入門4" },
        { value: "Web技術入門5", label: "Web技術入門5" },        
      ],
    },
    {
      label: "データベース入門",
      options: [
        { value: "データベース入門1", label: "データベース入門1" },
        { value: "データベース入門2", label: "データベース入門2" },
        { value: "データベース入門3", label: "データベース入門3" },
        { value: "データベース入門4", label: "データベース入門4" },
      ],
    },
    {
      label: "Rails入門",
      options: [
        { value: "Rails入門1", label: "Rails入門1" },
        { value: "Rails入門2", label: "Rails入門2" },
        { value: "Rails入門3", label: "Rails入門3" },
        { value: "Rails入門4", label: "Rails入門4" },
        { value: "Rails入門5", label: "Rails入門5" },
        { value: "Rails入門6", label: "Rails入門6" },
        { value: "Rails入門7", label: "Rails入門7" },
        { value: "Rails入門8", label: "Rails入門8" },
        { value: "Rails入門9", label: "Rails入門9" },
      ],
    },
    {
      label: "アプリ開発",
      options: [
        { value: "アプリ開発2", label: "アプリ開発2" },
        { value: "アプリ開発3", label: "アプリ開発3" },
        { value: "アプリ開発4", label: "アプリ開発4" },
      ]
    },
    {
      label: "JavaScript入門",
      options: [
        { value: "JavaScript入門1", label: "JavaScript入門1" },
        { value: "JavaScript入門2", label: "JavaScript入門2" },
        { value: "JavaScript入門3", label: "JavaScript入門3" },
        { value: "JavaScript入門4", label: "JavaScript入門4" },
        { value: "JavaScript入門5", label: "JavaScript入門5" },
      ],
    },
    {
      label: "入門STEP 総復習",
      options: [
        { value: "入門STEP 総復習", label: "入門STEP 総復習" },
      ],
    },
    {
      label: "データベース・SQL基礎",
      options: [
        { value: "データベース・SQL基礎1", label: "データベース・SQL基礎1" },
        { value: "データベース・SQL基礎2", label: "データベース・SQL基礎2" },
        { value: "データベース・SQL基礎3", label: "データベース・SQL基礎3" },
        { value: "データベース・SQL基礎4", label: "データベース・SQL基礎4" },
        { value: "データベース・SQL基礎5", label: "データベース・SQL基礎5" },
        { value: "データベース・SQL基礎6", label: "データベース・SQL基礎6" },
        { value: "データベース・SQL基礎7", label: "データベース・SQL基礎7" },
        { value: "データベース・SQL基礎8", label: "データベース・SQL基礎8" },
      ],
    },
    {
      label: "Ruby基礎",
      options: [
        { value: "Ruby基礎1", label: "Ruby基礎1" },
        { value: "Ruby基礎2", label: "Ruby基礎2" },
      ],
    },
    {
      label: "JavaScript基礎",
      options: [
        { value: "JavaScript基礎1", label: "JavaScript基礎1" },
        { value: "JavaScript基礎2", label: "JavaScript基礎2" },
        { value: "JavaScript基礎3", label: "JavaScript基礎3" },
      ],
    },
    {
      label: "Rails基礎",
      options: [
        { value: "Rails基礎1", label: "Rails基礎1" },
        { value: "Rails基礎2", label: "Rails基礎2" },
        { value: "Rails基礎3", label: "Rails基礎3" },
        { value: "Rails基礎4", label: "Rails基礎4" },
        { value: "Rails基礎5", label: "Rails基礎5" },
        { value: "Rails基礎6", label: "Rails基礎6" },
        { value: "Rails基礎7", label: "Rails基礎7" },
        { value: "Rails基礎8", label: "Rails基礎8" },
        { value: "Rails基礎9", label: "Rails基礎9" },
        { value: "Rails基礎10", label: "Rails基礎10" },
        { value: "Rails基礎11", label: "Rails基礎11" },
        { value: "Rails基礎12", label: "Rails基礎12" },
        { value: "Rails基礎13", label: "Rails基礎13" },
        { value: "Rails基礎14", label: "Rails基礎14" },
        { value: "Rails基礎15", label: "Rails基礎15" },
        { value: "Rails基礎16", label: "Rails基礎16" },
        { value: "Rails基礎17", label: "Rails基礎17" },
        { value: "Rails基礎18", label: "Rails基礎18" },
        { value: "Rails基礎19", label: "Rails基礎19" },
        { value: "Rails基礎20", label: "Rails基礎20" },
        { value: "Rails基礎21", label: "Rails基礎21" },
        { value: "Rails基礎22", label: "Rails基礎22" },
      ],
    },
    {
      label: "RSpec入門・演習",
      options: [
        { value: "RSpec入門・演習1", label: "RSpec入門・演習1" },
        { value: "RSpec入門・演習2", label: "RSpec入門・演習2" },
        { value: "RSpec入門・演習3", label: "RSpec入門・演習3" },
        { value: "RSpec入門・演習4", label: "RSpec入門・演習4" },
      ],
    },
    {
      label: "基礎STEP 総復習",
      options: [
        { value: "基礎STEP 総復習", label: "基礎STEP 総復習" },
      ],
    },
    {
      label: "中間試験",
      options: [
        { value: "中間試験1", label: "中間試験1" },
        { value: "中間試験2", label: "中間試験2" },
        { value: "中間試験3", label: "中間試験3" },
        { value: "中間試験4", label: "中間試験4" },
      ],
    },
    {
      label: "アプリ開発",
      options: [
        { value: "アプリ開発5", label: "アプリ開発5" },
        { value: "アプリ開発6", label: "アプリ開発6" },
        { value: "アプリ開発7", label: "アプリ開発7" },
        { value: "アプリ開発8", label: "アプリ開発8" },
      ],
    },
    {
      label: "Rails応用",
      options: [
        { value: "Rails応用1", label: "Rails応用1" },
        { value: "Rails応用2", label: "Rails応用2" },
        { value: "Rails応用3", label: "Rails応用3" },
        { value: "Rails応用4", label: "Rails応用4" },
        { value: "Rails応用5", label: "Rails応用5" },
        { value: "Rails応用6", label: "Rails応用6" },
        { value: "Rails応用7", label: "Rails応用7" },
        { value: "Rails応用8", label: "Rails応用8" },
        { value: "Rails応用9", label: "Rails応用9" },
        { value: "Rails応用10", label: "Rails応用10" },
      ],
    },
    {
      label: "ActiveRecord演習",
      options: [
        { value: "ActiveRecord演習", label: "ActiveRecord演習" },
      ],
    },
    {
      label: "Ruby応用",
      options: [
        { value: "Ruby応用1", label: "Ruby応用1" },
        { value: "Ruby応用2", label: "Ruby応用2" },
        { value: "Ruby応用3", label: "Ruby応用3" },
        { value: "Ruby応用4", label: "Ruby応用4" },
        { value: "Ruby応用5", label: "Ruby応用5" },
        { value: "Ruby応用6", label: "Ruby応用6" },
        { value: "Ruby応用7", label: "Ruby応用7" },
        { value: "Ruby応用8", label: "Ruby応用8" },
      ],
    },
    {
      label: "インフラ入門",
      options: [
        { value: "インフラ入門1", label: "インフラ入門1" },
        { value: "インフラ入門2", label: "インフラ入門2" },
        { value: "インフラ入門3", label: "インフラ入門3" },
        { value: "インフラ入門4", label: "インフラ入門4" },
        { value: "インフラ入門5", label: "インフラ入門5" },
        { value: "インフラ入門6", label: "インフラ入門6" },
        { value: "インフラ入門7", label: "インフラ入門7" },
      ],
    },
    {
      label: "応用STEP 総復習",
      options: [
        { value: "応用STEP 総復習", label: "応用STEP 総復習" },
      ],
    },
    {
      label: "アプリ開発",
      options: [
        { value: "アプリ開発9", label: "アプリ開発9" },
        { value: "アプリ開発10", label: "アプリ開発10" },
        { value: "アプリ開発11", label: "アプリ開発11" },
        { value: "アプリ開発12", label: "アプリ開発12" },
      ],
    },
    {
      label: "卒業試験",
      options: [
        { value: "卒業試験1", label: "卒業試験1" },
        { value: "卒業試験2", label: "卒業試験2" },
        { value: "卒業試験3", label: "卒業試験3" },
        { value: "卒業試験4", label: "卒業試験4" },
        { value: "卒業試験5", label: "卒業試験5" },
      ]
    },
  ];
  
  // 先週の学習内容のフォームの値が変更されたときの処理
  const [lastWeekLearning, setLastWeekLearning] = useState([]);

  // 今週の学習内容のフォームの値が変更されたときの処理
  const [thisWeekLearning, setThisWeekLearning] = useState([]);

  // CREDOの選択肢
  const credoOptions = [
    {
      label: "Be Open",
      options: [
        { value: "Be Open (timesで1週間毎日発信をする)", label: "timesで1週間毎日発信をする" },
        { value: "Be Open (timesで自分の考えや思考を発信する)", label: "timesで自分の考えや思考を発信する" },
        { value: "Be Open (もらったアドバイスを3回以上実行する)", label: "もらったアドバイスを3回以上実行する" },
        { value: "Be Open (LT会に登壇する)", label: "LT会に登壇する" },
        { value: "Be Open (わからないことを自ら3回以上質問する(times、面談))", label: "わからないことを自ら3回以上質問する(times、面談)" },
      ],
    },
    {
      label: "Move Fast",
      options: [
        { value: "Move Fast (DMやコメントの返信を5回以上その場で返す)", label: "DMやコメントの返信を5回以上その場で返す" },
        { value: "Move Fast (もらったアドバイスを3回以上即実行する)", label: "もらったアドバイスを3回以上即実行する" },
        { value: "Move Fast (「言われる前の先回り行動」を3回以上行う)", label: "「言われる前の先回り行動」を3回以上行う" },
        { value: "Move Fast (timesで困っている人を見かけたらすぐにコメントする)", label: "timesで困っている人を見かけたらすぐにコメントする" },
        { value: "Move Fast (周りの人を巻き込んだ新たなチャレンジをする)", label: "周りの人を巻き込んだ新たなチャレンジをする" },
      ],
    },
    {
      label: "Give First",
      options: [
        { value: "Give First (他の人のReportやtimesにスタンプを1週間毎日押す)", label: "他の人のReportやtimesにスタンプを1週間毎日押す" },
        { value: "Give First (他の人のReportやtimesにコメントを5回以上する)", label: "他の人のReportやtimesにコメントを5回以上する" },
        { value: "Give First (「Nice Active!」への推薦を5回以上する)", label: "「Nice Active!」への推薦を5回以上する" },
        { value: "Give First (先輩が作ったアプリを使い、フィードバックを送る)", label: "先輩が作ったアプリを使い、フィードバックを送る" },
        { value: "Give First (Discordで学習で困っている人の相談に3回以上乗る)", label: "Discordで学習で困っている人の相談に3回以上乗る" },
      ],
    },
    {
      label: "Geek Out",
      options: [
        { value: "Geek Out (技術イベントに2ヶ月に1回以上参加する)", label: "技術イベントに2ヶ月に1回以上参加する" },
        { value: "Geek Out (学習進捗が自己目標のペース以上に進んでいる)", label: "学習進捗が自己目標のペース以上に進んでいる" },
        { value: "Geek Out (カリキュラム以外の教材を使って知識を深めている)", label: "カリキュラム以外の教材を使って知識を深めている" },
        { value: "Geek Out (学習アウトプットをnotion/ブログで定常的につける)", label: "学習アウトプットをnotion/ブログで定常的につける" },
        { value: "Geek Out (就活用のアプリとは別に知識定着のためのアプリを作成)", label: "就活用のアプリとは別に知識定着のためのアプリを作成" },
      ],
    },
    {
      label: "Take Ownership",
      options: [
        { value: "Take Ownership (Reportを1ヶ月間必ず提出する)", label: "Reportを1ヶ月間必ず提出する" },
        { value: "Take Ownership (Reportで決めた目標を1ヶ月連続で達成する)", label: "Reportで決めた目標を1ヶ月連続で達成する" },
        { value: "Take Ownership (コードを書くときに「なぜ？」を考える（10回以上）)", label: "コードを書くときに「なぜ？」を考える（10回以上）" },
        { value: "Take Ownership (自主イベントを企画する)", label: "自主イベントを企画する" },
        { value: "Take Ownership (チーム開発を2人以上でやってみる)", label: "チーム開発を2人以上でやってみる" },
      ],
    },
  ];

  // 先週のCREDOのフォームの値が変更されたときの処理
  const [lastWeekCredo, setLastWeekCredo] = useState('');

  // 今週のCREDOによって表示するフォームを変更するためのstate
  const [credoSelection, setCredoSelection] = useState('');

  const [comment, setComment] = useState('');

  const [finalReport, setFinalReport] = useState('');

  // 先週のtotal時間のフォームの値が変更されたときの処理
  const handleLastWeekTimeChange = (id, selectedOption) => {
    setLastWeek({ ...lastWeek, [id]: selectedOption ? parseInt(selectedOption.value, 10) : '' });
  };

  // 今週のtotal時間のフォームの値が変更されたときの処理 
  const handleThisWeekTimeChange = (id, selectedOption) => {
    setThisWeek({ ...thisWeek, [id]: selectedOption ? parseInt(selectedOption.value, 10) : '' });
  };

  const reportTemplate =
`##### 【先週の振り返り】（行ったこと、意識したこと）
** 学習: ** ${lastWeekLearning}
** total時間（週）: ** ${lastWeek.totalHours}h ${lastWeek.totalMinutes ? `${lastWeek.totalMinutes}m` : ''}
** CREDO: ** ${lastWeekCredo}\n\n
##### 【今週の目標】（行うこと、意識して取り組むことを具体的に）
** 学習: ** ${thisWeekLearning}
** total時間（週）: ** ${thisWeek.totalHours}h ${thisWeek.totalMinutes ? `${thisWeek.totalMinutes}m` : ''}
** CREDO: ** ${thisWeek.credo}\n\n
##### 【他の受講生に伝えたいこと・意気込みなど！】
${comment}`;

  const handleLastWeekSubmit = (e) => {
    e.preventDefault();

    // 週報を生成
    const report = generateFinalReport();
    setFinalReport(report);

    // 週報をクリップボードにコピー
    navigator.clipboard.writeText(report);
  };


  const generateFinalReport = () => {
    // マークダウンテンプレートにデータを埋め込み、最終的な週報を生成
    const filledReport = reportTemplate
      .replace('${lastWeek.learning}', lastWeekLearning.join(', '))
      .replace('${lastWeek.totalHours}', `${lastWeek.totalHours}時間 ${lastWeek.totalMinutes}分`)
      .replace('${lastWeek.credo}', lastWeekCredo)
      .replace('${thisWeek.learning}', thisWeekLearning.join(', '))
      .replace('${thisWeek.totalHours}', `${thisWeek.totalHours}時間 ${thisWeek.totalMinutes}分`)
      .replace('${thisWeek.credo}', thisWeek.credo)
      .replace('${comment}', comment);
    return filledReport;
  };

  // モーダルの開閉状態を管理するstate
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4 border-b">Report 作成ツール</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="learning">
            注意事項：当アプリケーションは、RUNTEQ公式のReport作成ツールではありません。
            また、カリキュラムのバージョンによっては、対応していない項目がある可能性があります。
          </label>
        </div>
      <form>
        {/* 先週の振り返りの小見出し */}
        <h2 className="text-xl font-bold mb-4">【先週の振り返り】（行ったこと、意識したこと）</h2>

        {/* 先週のフォーム */}
        <div className="mb-4">
        {/* 学習 */}
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="learning">
          学習:
        </label>
        <CreatableSelect
          isMulti
          closeMenuOnSelect={false}
          options={options}
          placeholder="自由記述 or カリキュラムを選択してください（複数選択可）"
          value={lastWeekLearning.map(value => options.flatMap(group => group.options).find(option => option.value === value) || { value, label: value })}
          onChange={(selectedOptions) => setLastWeekLearning(selectedOptions ? selectedOptions.map(option => option.value) : [])}
        />
      </div>

        {/* total時間のフォーム */}
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="totalHours">
          total時間:
        </label>
        <div className="flex mb-4">
          <div className="w-1/12 pr-0 mr-2">
            <ReactSelect
              className="w-full"
              id="totalHours"
              placeholder="時間"
              value={[...Array(101).keys()].map((value) => ({ value, label: value })).find(option => option.value === lastWeek.totalHours)}
              onChange={(selectedOption) => handleLastWeekTimeChange('totalHours', selectedOption)}
              options={[...Array(101).keys()].map((value) => ({ value, label: value }))}
            />
          </div>

          <div className="w-1/12 pl-0 ml-2">
              <ReactSelect
                className="w-full"
                id="totalMinutes"
                placeholder="分"
                value={[...Array(60).keys()].map((value) => ({ value, label: value })).find(option => option.value === lastWeek.totalMinutes)}
                onChange={(selectedOption) => handleLastWeekTimeChange('totalMinutes', selectedOption)}
                options={[...Array(60).keys()].map((value) => ({ value, label: value }))}
              />
          </div>
        </div>

        {/* CREDOのフォーム */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="credo">
            CREDO:
          </label>
          <CreatableSelect
            className="w-full"
            id="lastWeekCredo"
            placeholder="自由記述 or CREDOを選択してください"
            value={credoOptions.find(option => option.value === lastWeekCredo)}
            onChange={(selectedOption) => setLastWeekCredo(selectedOption.value)}
            options={credoOptions}
          />

          {credoSelection === 'credo1' && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="extraForm">
                追加のフォーム：
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="extraForm"
                type="text"
                value={thisWeek.extraForm}
                onChange={(e) => setThisWeek({ ...thisWeek, extraForm: e.target.value })}
              />
            </div>
          )}
        </div>

        {/* 他の入力フィールドも同様に追加 */}

        {/* 今週の目標の小見出し */}
        <h2 className="text-xl font-bold mb-4">【今週の目標】（行うこと、意識して取り組むことを具体的に）</h2>

        {/* 今週のフォーム */}
        <div className="mb-4">
          {/* 学習 */}
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="learning">
            学習:
          </label>
          <CreatableSelect
            className="mb-4"
            isMulti
            closeMenuOnSelect={false}
            options={options}
            placeholder="自由記述 or カリキュラムを選択してください（複数選択可）"
            value={thisWeekLearning.map(value => options.flatMap(group => group.options).find(option => option.value === value) || { value, label: value })}
            onChange={(selectedOptions) => setThisWeekLearning(selectedOptions ? selectedOptions.map(option => option.value) : [])}
          />

          {/* total時間 */}
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="totalHours">
            total時間:
          </label>
          <div className="flex mb-4">
            <div className="w-1/12 pr-0 mr-2">
              <ReactSelect
                className="w-full"
                id="totalHours"
                placeholder="時間"
                value={[...Array(101).keys()].map((value) => ({ value, label: value })).find(option => option.value === thisWeek.totalHours)}
                onChange={(selectedOption) => handleThisWeekTimeChange('totalHours', selectedOption)}
                options={[...Array(101).keys()].map((value) => ({ value, label: value }))}
              />
            </div>

            <div className="w-1/12 pr-0 ml-2">
              <ReactSelect
                className="w-full"
                id="totalMinutes"
                placeholder="分"
                value={[...Array(60).keys()].map((value) => ({ value, label: value })).find(option => option.value === thisWeek.totalMinutes)}
                onChange={(selectedOption) => handleThisWeekTimeChange('totalMinutes', selectedOption)}
                options={[...Array(60).keys()].map((value) => ({ value, label: value }))}
              />
            </div>
          </div>

          {/* CREDO */}
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="credo">
            CREDO:
          </label>
          <CreatableSelect
            className="w-full"
            id="credo"
            placeholder="自由記述 or CREDOを選択してください"
            value={credoOptions.find(option => option.value === thisWeek.credo)}
            onChange={(selectedOption) => setThisWeek({ ...thisWeek, credo: selectedOption.value })}
            options={credoOptions}
          />
        </div>

        {/* 他の入力フィールドも同様に追加 */}

        {/* 伝えたいことの小見出し */}
        <h2 className="text-xl font-bold mb-4">【他の受講生に伝えたいこと・意気込みなど！】</h2>

        {/* コメントのフォーム */}
        <div className="mb-4">
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onInput={(e) => {
              e.target.style.height = 'auto';
              e.target.style.height = (e.target.scrollHeight) + 'px';
            }}
            style={{height: 'auto'}}
          />
        </div>

        {/* 送信ボタン */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLastWeekSubmit}>クリップボードにコピー</button>
      </form>
      
      {/* コピーされたReport */}
      <div className='mt-4'>
        <h2>コピーされたReport</h2>
        <pre>{finalReport}</pre>
      </div>

      {/* フッター */}
      <div className="mt-8 border-t pt-4 pb-2 text-center text-gray-500">
        © 2024 aiueo49
        <div className="mt-2">
          <button onClick={() => setIsTermsOpen(true)} className="text-blue-500 hover:underline">利用規約</button>
          <span className="mx-2">|</span>
          <button onClick={() => setIsPrivacyOpen(true)} className="text-blue-500 hover:underline">プライバシーポリシー</button>
        </div>

        {/* 利用規約モーダル */}
        <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />

        {/* プライバシーポリシーモーダル */}
        <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
        </div>
    </div>
  );
}

export default App;
