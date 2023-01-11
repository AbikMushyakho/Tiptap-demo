import { Icon } from "@iconify/react";
import "./styles.scss";
import styles from "./styles.module.scss";

import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useCallback } from "react";
import Icons from "./Icons";
import FontFamily from "@tiptap/extension-font-family";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";

const MenuBar = ({ editor }) => {
  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? styles.isActive : ""}
      >
        <Icon icon={Icons.bold} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? styles.isActive : ""}
      >
        <Icon icon={Icons.italic} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive("underline") ? styles.isActive : ""}
      >
        <Icon icon={Icons.underline} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? styles.isActive : ""}
      >
        <Icon icon={Icons.strike} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={editor.isActive("code") ? styles.isActive : ""}
      >
        <Icon icon={Icons.code} />
      </button>
      <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        <Icon icon={Icons.removeStyles} />
      </button>
      <button onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive("paragraph") ? styles.isActive : ""}
      >
        <Icon icon={Icons.paragraph} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={
          editor.isActive("heading", { level: 1 }) ? styles.isActive : ""
        }
      >
        <Icon icon={Icons.h1} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive("heading", { level: 2 }) ? styles.isActive : ""
        }
      >
        <Icon icon={Icons.h2} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={
          editor.isActive("heading", { level: 3 }) ? styles.isActive : ""
        }
      >
        <Icon icon={Icons.h3} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={
          editor.isActive("heading", { level: 4 }) ? styles.isActive : ""
        }
      >
        <Icon icon={Icons.h4} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={
          editor.isActive("heading", { level: 5 }) ? styles.isActive : ""
        }
      >
        <Icon icon={Icons.h5} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={
          editor.isActive("heading", { level: 6 }) ? styles.isActive : ""
        }
      >
        <Icon icon={Icons.h6} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? styles.isActive : ""}
      >
        <Icon icon={Icons.bulletList} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? styles.isActive : ""}
      >
        <Icon icon={Icons.orderedList} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive("codeBlock") ? styles.isActive : ""}
      >
        <Icon icon={Icons.codeBlock} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? styles.isActive : ""}
      >
        <Icon icon={Icons.blockquote} />
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        <Icon icon={Icons.horizontalRule} />
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        <Icon icon={Icons.undo} />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        <Icon icon={Icons.redo} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={editor.isActive("highlight") ? styles.isActive : ""}
      >
        <Icon icon={Icons.highlight} />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={
          editor.isActive({ textAlign: "left" }) ? styles.isActive : ""
        }
      >
        <Icon icon={Icons.leftAlign} />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={
          editor.isActive({ textAlign: "center" }) ? styles.isActive : ""
        }
      >
        <Icon icon={Icons.centerAlign} />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={
          editor.isActive({ textAlign: "right" }) ? styles.isActive : ""
        }
      >
        <Icon icon={Icons.rightAligh} />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        className={
          editor.isActive({ textAlign: "justify" }) ? styles.isActive : ""
        }
      >
        <Icon icon={Icons.justify} />
      </button>
      <button
        onClick={() => editor.chain().focus().setFontFamily("Inter").run()}
        className={
          editor.isActive("textStyle", { fontFamily: "Inter" })
            ? styles.isActive
            : ""
        }
      >
        Inter
      </button>
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .setFontFamily("Comic Sans MS, Comic Sans")
            .run()
        }
        className={
          editor.isActive("textStyle", {
            fontFamily: "Comic Sans MS, Comic Sans",
          })
            ? styles.isActive
            : ""
        }
      >
        Comic Sans
      </button>
      <button
        onClick={() => editor.chain().focus().setFontFamily("serif").run()}
        className={
          editor.isActive("textStyle", { fontFamily: "serif" })
            ? styles.isActive
            : ""
        }
      >
        serif
      </button>
      <button
        onClick={() => editor.chain().focus().setFontFamily("monospace").run()}
        className={
          editor.isActive("textStyle", { fontFamily: "monospace" })
            ? styles.isActive
            : ""
        }
      >
        monospace
      </button>
      <button
        onClick={() => editor.chain().focus().setFontFamily("cursive").run()}
        className={
          editor.isActive("textStyle", { fontFamily: "cursive" })
            ? styles.isActive
            : ""
        }
      >
        cursive
      </button>
      <button onClick={() => editor.chain().focus().unsetFontFamily().run()}>
        unsetFontFamily
      </button>
      <button
        onClick={setLink}
        className={editor.isActive("link") ? "is-active" : ""}
      >
        <Icon icon={Icons.link} />
      </button>
      <button
        onClick={() => editor.chain().focus().unsetLink().run()}
        disabled={!editor.isActive("link")}
      >
        <Icon icon={Icons.unlink} />
      </button>
      <EditorContent editor={editor} />
    </>
  );
};

const App = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
      TextStyle,
      FontFamily,
      Link.configure({
        openOnClick: true,
        linkOnPaste: false,
        autolink: false,
      }),
      Underline,
    ],
    content: `
      <h2>
        Hi there,
      </h2>
      <p>
        this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
      </p>
      <ul>
        <li>
          That’s a bullet list with one …
        </li>
        <li>
          … or two list items.
        </li>
      </ul>
      <p>
        Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
      </p>
      <pre><code class="language-css">body {
  display: none;
}</code></pre>
      <p>
        I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
      </p>
      <blockquote>
        Wow, that’s amazing. Good work, boy! 👏
        <br />
        — Mom
      </blockquote>
    `,
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default App;
