import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Random;

public class ValentineWebsite extends JFrame {
    private JButton yesButton;
    private JButton noButton;
    private JLabel messageLabel;
    private JPanel panel;

    public ValentineWebsite() {
        setTitle("Will You Be My Valentine?");
        setSize(400, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new BorderLayout());

        panel = new JPanel();
        panel.setLayout(new GridLayout(3, 1));

        JLabel gifLabel = new JLabel(new ImageIcon("path/to/your/gif.gif"));
        panel.add(gifLabel);

        messageLabel = new JLabel("Will you be my Valentine?", SwingConstants.CENTER);
        panel.add(messageLabel);

        yesButton = new JButton("Yes");
        noButton = new JButton("No");

        yesButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                messageLabel.setText("Yay! I love you! Thanks for choosing me to be your Valentine!");
                yesButton.setVisible(false);
                noButton.setVisible(false);
            }
        });

        noButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                moveNoButton();
            }
        });

        JPanel buttonPanel = new JPanel();
        buttonPanel.add(yesButton);
        buttonPanel.add(noButton);
        panel.add(buttonPanel);

        add(panel, BorderLayout.CENTER);
    }

    private void moveNoButton() {
        Random rand = new Random();
        int x = rand.nextInt(300);
        int y = rand.nextInt(200);
        noButton.setLocation(x, y);
        noButton.repaint();
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            ValentineWebsite frame = new ValentineWebsite();
            frame.setVisible(true);
        });
    }
}
