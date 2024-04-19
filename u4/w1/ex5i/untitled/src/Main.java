import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Seleziona il tipo di media da riprodurre (audio/video/photo):");
        String mediaType = scanner.nextLine();

        if (mediaType.equalsIgnoreCase("audio")) {
            AudioPlayer audioPlayer = new AudioPlayer();
            audioPlayer.play();
            audioPlayer.adjustVolume();
        } else if (mediaType.equalsIgnoreCase("video")) {
            VideoPlayer videoPlayer = new VideoPlayer();
            videoPlayer.play();
            videoPlayer.adjustBrightness();
        } else if (mediaType.equalsIgnoreCase("photo")) {
            PhotoPlayer photoPlayer = new PhotoPlayer();
            photoPlayer.play();
            photoPlayer.slideshow();
        } else {
            System.out.println("Tipo media non supportato");
        }

        scanner.close();
    }
}

