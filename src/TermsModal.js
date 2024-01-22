import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown  from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { termsText } from './terms.js';

const TermsModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 style={{ fontWeight: 'bold', fontSize: '2em' }}>利用規約</h2>
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{termsText}</ReactMarkdown>
          <div style={{ textAlign: 'right'}}>以上</div>
        <button onClick={onClose}>閉じる</button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default TermsModal;