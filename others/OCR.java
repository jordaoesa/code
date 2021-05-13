public class OCR {
    public boolean solution(String S, String T) {
        String[] first = undo(S);
        String[] second = undo(T);

        if(first.length != second.length) return false;

        for(int i = 0; i < first.length; i++) {
            if(!first[i].equals(second[i])
                && !"?".equals(first[i])
                && !"?".equals(second[i])
            ) {
                return false;
            }
        }

        return true;
    }

    private String[] undo(String str) {
        StringBuilder sbr = new StringBuilder();
        for(int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);
            if(((int)c) >= 48 && ((int)c) <= 57) {
                int qty = Integer.parseInt(String.valueOf(c));
                while(qty-- > 0) {
                    sbr.append('?');
                }
            } else {
                sbr.append(c);
            }
        }
        return sbr.toString().split("");
    }

    public static void main(String[] args) {
        OCR ocr = new OCR();
        System.out.println(ocr.solution("A2Le", "2pL1"));
        System.out.println(ocr.solution("a10", "10a"));
        System.out.println(ocr.solution("ba1", "1Ad"));
        System.out.println(ocr.solution("3x2x", "8"));
    }
}

