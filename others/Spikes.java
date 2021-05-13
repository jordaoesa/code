import java.util.*;

public class Spikes {
    public int solution(int[] A) {
        int max = Integer.MIN_VALUE;
        Map<Integer, Integer> map = new HashMap<>();
        for(int num : A) {
            if(!map.containsKey(num)) map.put(num, 0);
            map.put(num, map.get(num)+1);

            if(num > max) max = num;
        }

        int count = 1;
        for(int key : map.keySet()) {
            int value = map.get(key);
            if(key != max) count += Math.min(2, value);
        }

        return count;
    }

    public static void main(String[] args) {
        Spikes spikes = new Spikes();
        System.out.println(spikes.solution(new int[]{4,5,7,6,3,2}));
        System.out.println(spikes.solution(new int[]{1,1,5,4,3}));
        System.out.println(spikes.solution(new int[]{1,4,3,5}));
        System.out.println(spikes.solution(new int[]{3,5,2}));
        System.out.println(spikes.solution(new int[]{2}));
        System.out.println(spikes.solution(new int[]{1,2}));
        System.out.println(spikes.solution(new int[]{2,5,3,2,4,1}));
        System.out.println(spikes.solution(new int[]{2,3,3,2,2,2,1}));
    }
}

